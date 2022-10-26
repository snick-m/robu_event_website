<script lang="ts">
  import logo from "./assets/logo.png";
  import "@fontsource/raleway/variable.css";
</script>

<div class="flex flex-col h-screen" style="font-family: 'Raleway', sans-serif;">
  <main class="flex flex-col text-white text-2xl flex-grow">
    <header
      class="px-16 h-40 w-full flex flex-row items-center justify-between"
    >
      <img
        src={logo}
        class="transition-all hover:scale-105 w-20 mx-4 rounded-lg"
        alt="ROBU Logo"
      />
      <nav class="flex flex-row justify-evenly">
        <a class="btn btn-outline border-0 mx-4">About</a>
        <a class="btn btn-outline border-0 mx-4">Team</a>
        <a class="btn btn-outline border-2 mx-4 px-6 rounded-full">Login</a>
      </nav>
    </header>
    <section class="flex flex-col justify-center items-center flex-grow">
      <p
        class="transition-all hover:tracking-widest hover:leading-loose text-center mb-20 text-7xl font-bold leading-relaxed tracking-wide"
      >
        Achieve Your Imagination<br />Through Your
        <span class="text-blue-600">Robot</span>
      </p>

      <button
        class="transition-all opacity-60 hover:scale-110 hover:opacity-100 font-light bg-gradient-to-r from-info to-primary btn btn-primary rounded-lg w-40"
        >Learn More <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </section>
  </main>

  <footer class="footer footer-center mb-auto p-4 text-base-content">
    <div>
      <p>Copyright © 2022 - All right reserved by ROBU</p>
    </div>
  </footer>
</div>
