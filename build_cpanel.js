import fs from "fs";

const files = { "main": fs.readFileSync('./server/main.js', 'utf8'), "api.routes": fs.readFileSync('./server/api.routes.js', 'utf8') };

function convertESImportToCJS(importStatement) {
    const importStatementRegex = /import\s+(?:\*\s+as\s+)?([a-zA-Z0-9_$]+)\s+from\s+['"](.+)['"];?/g;
    const importStatementMatch = importStatementRegex.exec(importStatement);

    if (importStatementMatch) {
        const importName = importStatementMatch[1];
        const importPath = importStatementMatch[2];
        return `const ${importName} = require("${importPath}");`;
    }
    return importStatement;
}

function convertESExportToCJS(exportStatement) {
    const exportStatementRegex = /export\s+default\s+([a-zA-Z0-9_$]+);?/g;
    const exportStatementMatch = exportStatementRegex.exec(exportStatement);
    if (exportStatementMatch) {
        const exportName = exportStatementMatch[1];
        return `module.exports = ${exportName};`;
    }
    return exportStatement;
}

function convertESModuleToCJS(module) {
    const importStatements = module.match(/import\s+(?:\*\s+as\s+)?[a-zA-Z0-9_$]+\s+from\s+['"][a-zA-Z0-9-./_$]+['"];?/g);
    const exportStatements = module.match(/export\s+default\s+[a-zA-Z0-9_$]+;?/g);

    let convertedModule = module;
    if (importStatements) {
        importStatements.forEach(importStatement => {
            convertedModule = convertedModule.replace(
                importStatement,
                convertESImportToCJS(
                    importStatement.includes('.js')
                        ? importStatement.replace('.js', '.cjs')
                        : importStatement
                ));
        });
    }
    if (exportStatements) {
        exportStatements.forEach(exportStatement => {
            convertedModule = convertedModule.replace(exportStatement, convertESExportToCJS(exportStatement));
        });
    }
    return convertedModule;
}


for (const [filename, file] of Object.entries(files)) {
    const convertedFile = convertESModuleToCJS(file);
    fs.writeFileSync(`./server/${filename}.cjs`, convertedFile);
}