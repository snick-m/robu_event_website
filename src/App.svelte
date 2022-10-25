<script lang="ts">
  import logo from "./assets/svelte.svg";
</script>

<div class="flex flex-col h-screen">
  <main class="text-white text-2xl flex-grow">
    <header
      class="px-16 h-40 w-full flex flex-row items-center justify-between"
    >
      <img src={logo} class="w-14 mx-4" alt="ROBU Logo" />
      <nav class="flex flex-row justify-evenly">
        <a class="btn btn-outline border-0 mx-4">About</a>
        <a class="btn btn-outline border-0 mx-4">Team</a>
        <a class="btn btn-outline border-2 mx-4 px-6 rounded-full">Login</a>
      </nav>
    </header>
  </main>

  <footer class="footer footer-center mb-auto p-4 text-base-content">
    <div>
      <p>Copyright © 2022 - All right reserved by ROBU</p>
    </div>
  </footer>
</div>