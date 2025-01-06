<template>
    <div class="relative min-h-screen overflow-hidden transition-colors duration-1000" :style="{background: 'var(--color-custom-bg)'}">
        <!-- Animated gradient blobs -->
        <div class="absolute inset-0 overflow-hidden transition-colors duration-1000">
            <!-- First blob -->
            <div class="blob blob-1 absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-70 transition-colors duration-1000"
                 :style="{ background: 'var(--color-custom-text)' }">
            </div>

            <!-- Second blob -->
            <div class="blob blob-2 absolute w-[600px] h-[600px] rounded-full blur-[90px] opacity-60 transition-colors duration-1000"
                :style="{ background: 'var(--color-custom-text)' }">
            </div>

            <!-- Third blob -->
            <div class="blob blob-3 absolute w-[900px] h-[900px] rounded-full blur-[150px] opacity-50 transition-colors duration-1000"
                :style="{ background: 'var(--color-custom-text)' }">
            </div>
        </div>
        
        <!-- Navigation -->
        <nav class="relative z-10 px-6 py-4">
            <div class="container mx-auto flex items-center justify-center">
  
                <div class="flex items-center space-x-6">
                    <NuxtLink to="https://github.com/nirex0" class="text-xl" :style="{ color: 'var(--color-custom-text)' }" target="_blank">
                     
                        <svgo-github :style="{ color: 'var(--color-custom-text)' }" alt="Github Icon" class="transition-colors duration-1000"/>
                    </NuxtLink>
                    <NuxtLink to="https://linkedin.com/in/aryan-mousavi" class="text-xl" :style="{ color: 'var(--color-custom-text)' }" target="_blank">
                        <svgo-linkedin :style="{ color: 'var(--color-custom-text)' }" alt="LinkedIn Icon" class="transition-colors duration-1000"/>                        
                    </NuxtLink>
                    <NuxtLink to="https://x.com/TheHazardousOne" class="text-xl" :style="{ color: 'var(--color-custom-text)' }" target="_blank">
                        <svgo-x :style="{ color: 'var(--color-custom-text)' }" alt="Telegram Icon" class="transition-colors duration-1000"/>
                    </NuxtLink>
                    <NuxtLink to="https://www.youtube.com/@Nirex_" class="text-xl" :style="{ color: 'var(--color-custom-text)' }" target="_blank">
                        <svgo-youtube :style="{ color: 'var(--color-custom-text)' }" alt="Youtube Icon" class="transition-colors duration-1000"/>
                    </NuxtLink>
                    <NuxtLink to="https://t.me/Intelligenxe" class="text-xl" :style="{ color: 'var(--color-custom-text)' }" target="_blank">
                        <svgo-telegram :style="{ color: 'var(--color-custom-text)' }" alt="Telegram Icon" class="transition-colors duration-1000"/>
                    </NuxtLink>
                    <NuxtLink to="https://www.instagram.com/n.i.r.e.x/" class="text-xl" :style="{ color: 'var(--color-custom-text)' }" target="_blank">
                        <svgo-instagram :style="{ color: 'var(--color-custom-text)' }" alt="Instagram Icon" class="transition-colors duration-1000"/>
                    </NuxtLink>
                    <NuxtLink to="mailto://aryan.mousavi.dev@gmail.com" class="text-xl" :style="{ color: 'var(--color-custom-text)' }" target="_blank">
                        <svgo-gmail :style="{ color: 'var(--color-custom-text)' }" alt="Gmail Icon" class="transition-colors duration-1000"/>
                    </NuxtLink>
                </div>
            </div>
        </nav>

        <!-- Hero Content -->
        <div class="relative z-10 container mx-auto px-6 pt-32 text-center">
            <div class="clip-container" :class="{ 'reveal': isRevealed }">
                <h1 class="text-6xl md:text-7xl font-bold mb-4 transition-colors duration-1000" :style="{ color: 'var(--color-custom-text)' }">
                    Aryan Mousavi
                </h1>
                <h2 class="text-white text-3xl md:text-4xl font-semibold mb-4">
                    Full Stack Software Engineer
                </h2>
                <p class="text-white text-left text-md mb-8 max-w-2xl mx-auto">
                    A Dev dude who installed linux when he was 13 and deleted his entire data by accident. Learning about Programming / Hacking / AI / Game Development / Web Development / Mobile Development / Desktop Development since 2011.
                </p>
                
                <p class="text-white text-left text-md mb-8 max-w-2xl mx-auto">
                    If I want to say two things, it's to have your teammate's back with the code you write, And be fast in delivering the necessities.
                </p>

                <p class="text-white text-left text-md mb-8 max-w-2xl mx-auto">
                    If I want to say more, then here's C++, C#, Java, Python, Dart, Vue, TS, JS, HTML, CSS, SQL, NoSQL, Containers, Microservices, Monoliths, Message Broker, Web Tech, AI Tech, WinAPI, Unreal Engine, All Platforms, Algorithm design, Malware, Blockchain, Encryption Algorithms, Malware Analysis / Design, Code Obfuscation, and more.
                </p>
                <ol class="list-decimal list-inside">
                
                    <li class="text-white text-left text-xl mb-2 max-w-2xl mx-auto">
                        Mavlink drone/rover controller multi-plat app with Dart Flutter.
                    </li>
                    <li class="text-white text-left text-xl mb-2 max-w-2xl mx-auto">
                        C++ Unreal Engine Offline world simulation for vision model training.
                    </li>
                    <li class="text-white text-left text-xl mb-2 max-w-2xl mx-auto">
                        AI Virtual Try-On (VTON) with Python backend, Flutter app, and Arch Linux Apache PHP server.
                    </li>
                    <li class="text-white text-left text-xl mb-2 max-w-2xl mx-auto">
                        An Algorithm that could find the elevation of any given point on the map of the planet in O(1) time using Nasa's ASTERv003 Data.
                    </li>
                    <li class="text-white text-left text-xl mb-2 max-w-2xl mx-auto">
                        Windows C# WPF music player [<NuxtLink to="https://github.com/nirex0/nightsky" target="_blank" class=""><svgo-github :style="{ color: 'var(--color-custom-text)' }" alt="Github Icon" class="inline transition-colors duration-1000"/></NuxtLink>]
                    </li>
                    <li class="text-white text-left text-xl mb-2 max-w-2xl mx-auto">
                        C# Matrix Lib (For my personal learning) [<NuxtLink to="https://github.com/void-intelligence/Nomad" target="_blank" class=""><svgo-github :style="{ color: 'var(--color-custom-text)' }" alt="Github Icon" class="inline transition-colors duration-1000"/></NuxtLink>][<NuxtLink to="https://www.nuget.org/packages/VI-Nomad" target="_blank" class=""><svgo-nuget :style="{ color: 'var(--color-custom-text)' }" alt="Nuget Icon" class="inline transition-colors duration-1000"/></NuxtLink>]
                    </li>
                    <li class="text-white text-left text-xl mb-2 max-w-2xl mx-auto">
                        C# Deep Learning Library (Again for my own personal learning)[<NuxtLink to="https://github.com/void-intelligence/Vortex" target="_blank" class=""><svgo-github :style="{ color: 'var(--color-custom-text)' }" alt="Github Icon" class="inline transition-colors duration-1000"/></NuxtLink>]
                    </li>
                    <li class="text-white text-left text-xl mb-2 max-w-2xl mx-auto">
                        Windows C++ UI-Kit with Direct2D [<NuxtLink to="https://github.com/nirex0/warp-framework" target="_blank" class=""><svgo-github :style="{ color: 'var(--color-custom-text)' }" alt="Github Icon" class="inline transition-colors duration-1000"/></NuxtLink>]
                    </li>
                    <li class="text-white text-left text-xl mb-2 max-w-2xl mx-auto">
                        C# WPF Primary Flight Display library (PFD) [<NuxtLink to="https://github.com/nirex0/npilothud" target="_blank" class=""><svgo-github :style="{ color: 'var(--color-custom-text)' }" alt="Github Icon" class="inline transition-colors duration-1000"/></NuxtLink>][<NuxtLink to="https://www.youtube.com/watch?v=gUlBPrUYmx8" target="_blank" class=""><svgo-youtube :style="{ color: 'var(--color-custom-text)' }" alt="Youtube Icon" class="inline transition-colors duration-1000"/></NuxtLink>]
                    </li>
                    
                    <li class="text-white text-left text-xl mb-2 max-w-2xl mx-auto">
                        Flutter Primary Flight Display library (PFD) [<NuxtLink to="https://github.com/nirex0/pfd" target="_blank" class=""><svgo-github :style="{ color: 'var(--color-custom-text)' }" alt="Github Icon" class="inline transition-colors duration-1000"/></NuxtLink>][<NuxtLink to="https://pub.dev/packages/pfd" target="_blank" class=""><svgo-dart :style="{ color: 'var(--color-custom-text)' }" alt="Dart Icon" class="inline transition-colors duration-1000"/></NuxtLink>]
                    </li>
                    <li class="text-white text-left text-xl mb-2 max-w-2xl mx-auto">
                        Pytorch Openpose Integration for ComfyUI [<NuxtLink to="https://github.com/nirex0/ComfyUI_pytorch_openpose" target="_blank" class=""><svgo-github :style="{ color: 'var(--color-custom-text)' }" alt="Github Icon" class="inline transition-colors duration-1000"/></NuxtLink>]
                    </li>
                    <li class="text-white text-left text-xl mb-2 max-w-2xl mx-auto">
                        Youtube C++ Tutorial Series | Unreal Engine C++ Tutorials [<NuxtLink to="https://www.youtube.com/@Nirex_" target="_blank" class=""><svgo-youtube :style="{ color: 'var(--color-custom-text)' }" alt="Youtube Icon" class="inline transition-colors duration-1000"/></NuxtLink>]
                    </li>
                    <li class="text-white text-left text-xl mb-2 max-w-2xl mx-auto">
                        Ransomware Virus
                    </li>
                    <li class="text-white text-left text-xl mb-2 max-w-2xl mx-auto">
                        Undresser AI
                    </li>
                    <li class="text-white text-left text-xl mb-2 max-w-2xl mx-auto">
                        Remote Access Toolkit (RAT)
                    </li>
                    <li class="text-white text-left text-xl mb-2 max-w-2xl mx-auto">
                        C++ data steganography app from scratch.
                    </li>
                </ol>

                <p class="text-white text-left text-xl mb-0 mt-8 max-w-2xl mx-auto">
                    So you see I can do pretty much whatever task it is.
                </p>
                <p class="text-white text-left text-xl mb-8 max-w-2xl mx-auto">
                    Learning is my main strength.
                </p>


                <figure class="max-w-screen-md mx-auto text-center">
                    <svg class="w-10 h-10 mx-auto mb-3 transition-color duration-1000" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14" :style="{ background: 'transparent', fill: 'var(--color-custom-text)' }">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                    </svg>
                    <blockquote>
                        <p class="text-white text-left text-2xl mb-0 max-w-2xl mx-auto italic">
                            Jack of All Trades is a master of none...
                        </p>
                        <p class="text-white text-right text-2xl mb-0 max-w-2xl mx-auto italic">
                            But oftentimes better than a master of one.
                        </p>
                </blockquote>
                    <figcaption class="flex items-center justify-center mt-2 space-x-3 rtl:space-x-reverse">
                        <img class="w-6 h-6 rounded-full" src="/assets/images/shakespeare.jpg" alt="profile picture">
                        <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                            <cite class="pe-3 font-medium text-white dark:text-white">William Shakespeare</cite>
                        </div>
                    </figcaption>
                </figure>




                <div class="flex flex-wrap justify-center gap-4 mt-10 mb-10">
                    <button
                        @click="downloadCV"
                        :style="{ background: 'var(--color-custom-text)', color: 'var(--color-custom-bg)' }"
                        class="px-6 py-2 text-[#12151e] rounded-full font-medium transition-colors duration-1000 flex items-center gap-2">
                        CV
                        <font-awesome icon="file-pdf" class="h-6 w-6" :style="{ color: 'var(--color-custom-bg)' }"/>   
                    </button>
                </div>
                <div class="mb-5" :style="{color: '#00000000'}">
                    A
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { FileX } from 'lucide-vue-next'


const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/AryanCV.pdf'
    link.download = 'AryanCV.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

const isRevealed = ref(false)

onMounted(() => {
    setTimeout(() => {
        isRevealed.value = true
    }, 100)
})
</script>

<style scoped>
.clip-container {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    opacity: 0;
    transform: translateY(20px);
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.clip-container.reveal {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    opacity: 1;
    transform: translateY(0);
}

/* Animated blobs */
.blob {
  will-change: transform, background;
  animation: blob-float 20s infinite;
  position: absolute;
  transition: background 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.blob-1 {
    top: -20%;
    left: -10%;
    animation-delay: 0s;
}

.blob-2 {
    top: 30%;
    right: -20%;
    animation-delay: -5s;
}

.blob-3 {
    bottom: -30%;
    left: 20%;
    animation-delay: -10s;
}

@keyframes blob-float {
    0% {
        transform: translate(0, 0) rotate(0deg);
    }

    20% {
        transform: translate(100px, 50px) rotate(90deg);
    }

    40% {
        transform: translate(50px, -50px) rotate(180deg);
    }

    60% {
        transform: translate(-50px, 100px) rotate(270deg);
    }

    80% {
        transform: translate(-100px, -50px) rotate(360deg);
    }

    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}
</style>