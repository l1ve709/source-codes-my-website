document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });

    const musicPlayer = document.getElementById('music-player');
    const playPauseButton = document.getElementById('play-pause-button');
    const playIcon = playPauseButton.querySelector('.play-icon');
    const pauseIcon = playPauseButton.querySelector('.pause-icon');

    playPauseButton.addEventListener('click', () => {
        if (musicPlayer.paused) {
            musicPlayer.play().then(() => {
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'inline';
            }).catch(error => {
                console.error('Oynatma hatasè©≈: ', error);
            });
        } else {
            musicPlayer.pause();
            playIcon.style.display = 'inline';
            pauseIcon.style.display = 'none';
        }
    });

    const img = document.getElementById('bouncing-image');
    const container = document.body;

    let posX = 0;
    let posY = 0;
    let velX = (Math.random() - 0.5) * 10;
    let velY = (Math.random() - 0.5) * 10;

    function moveImage() {
        const imgWidth = img.offsetWidth;
        const imgHeight = img.offsetHeight;
        const maxX = container.clientWidth - imgWidth;
        const maxY = container.clientHeight - imgHeight;

        posX += velX;
        posY += velY;

        if (posX <= 0 || posX >= maxX) {
            velX = (Math.random() - 0.5) * 10;
        }

        if (posY <= 0 || posY >= maxY) {
            velY = (Math.random() - 0.5) * 10;
        }

        img.style.left = posX + 'px';
        img.style.top = posY + 'px';

        requestAnimationFrame(moveImage);
    }

    moveImage();

    const introCard = document.querySelector('.intro-card');

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeBackgroundColor() {
        introCard.style.backgroundColor = getRandomColor();
    }

    changeBackgroundColor();
    setInterval(changeBackgroundColor, 5000);

    const slideButton = document.getElementById('slideButton');

    slideButton.addEventListener('click', () => {
        window.location.href = 'info.html';
    });
});

    const audio = new Audio('music/xx.mp3'); 

    window.addEventListener('load', () => {
        audio.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
    });
    
    const playBtn = document.querySelector('.control-btn.play');
    const pauseBtn = document.querySelector('.control-btn.pause');
    const progressBar = document.getElementById('progress-bar');
    const timeDisplay = document.getElementById('timeDisplay');
    
    playBtn.addEventListener('click', () => {
        audio.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
    });
    
    pauseBtn.addEventListener('click', () => {
        audio.pause();
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'inline-block';
    });
    
    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        const progress = (currentTime / duration) * 100;
        progressBar.value = progress;
        timeDisplay.textContent = formatTime(currentTime) + ' / ' + formatTime(duration);
    });
    
    progressBar.addEventListener('input', () => {
        const value = progressBar.value;
        const duration = audio.duration;
        audio.currentTime = (value / 100) * duration;
    });
    
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
    