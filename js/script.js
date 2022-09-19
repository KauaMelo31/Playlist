let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');
let lyrics = document.querySelector('.track-lyrics');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'img/Morph.jpg',
        name : 'Morph ',
        artist : 'Twenty one pilots',
        music : 'musicas/Morph.mp3',

        lyrics: `Can't stop thinking about if and when I'd die
        For now I see that 'if' and 'when' are truly different cries
        For 'if' is purely panic, and 'when' is solemn sorrow
        And one invades today, while the other spies tomorrow
        We're surrounded, and we're hounded
        There's no 'above, ' or 'under, ' or 'around' it
        For 'above' is blind belief, and 'under' is sword to sleeve
        And 'around' is scientific miracle, let's pick 'above' and see
        For if and when we go 'above, ' the question still remains:
        Are we still in love, and is it possible we feel the same?
        And that's when going 'under' starts to take my wonder
        But until that time, I'll try to sing this...
        If I keep moving, they won't know
        I'll morph to someone else
        What they throw at me's too slow
        I'll morph to someone else
        I'm just a ghost
        I'll morph to someone else
        Defense mechanism mode
        He'll always try to stop me, that Nicolas Bourbaki
        He's got no friends close, but those who know him most know
        He goes by Nico
        He told me I'm a copy
        When I'd hear him mock me, that's almost stopped me
        Well we're surrounded, and we're hounded
        There's no above or a secret door
        What are we here for
        If not to run straight through all our tormentors?
        But until that time I'll try and sing this...
        If I keep moving, they won't know
        I'll morph to someone else
        What they throw at me's too slow
        I'll morph to someone else
        I'm just a ghost
        I'll morph to someone else
        Defense mechanism mode
        I'll morph to someone else
        Lights they blink to me, transmitting things to me
        Ones and zeroes, ergo this symphony
        Anybody listening? Ones and zeroes
        Count to infinity, ones and zeroes
        I'm surrounded, and I'm hounded
        There's no 'above, ' or 'under, ' or 'around' it
        For 'above' is blind belief, and 'under' is sword to sleeve
        And 'around' is scientific miracle, let's pick 'above' and see
        For if and when we go 'above, ' the question still remains:
        Are we still in love, and is it possible we feel the same?
        And that's when going 'under' starts to take my wonder
        But until that time...
        I'll morph to someone else
        I'm just a ghost
        If I keep moving, they won't know
        I'll morph to someone else
        What they throw at me's too slow
        I'll morph to someone else
        I'm just a ghost
        I'll morph to someone else
        Defense mechanism mode
        I'll morph to someone else
        If I keep moving, they won't know
        I'll morph to someone else
        Defense mechanism mode
        I'll morph to someone else
        Not done, not done, not done
        Josh Dun`,
    },
    {
        img : 'img/twentyOnePilotsBlurryFace.jpg',
        name : 'Stress Out',
        artist : 'Twenty One Pilots',
        music : 'musicas/Out.mp3',

        lyrics : `I wish I found some better sounds no one's ever heard
        I wish I had a better voice that sang some better words
        I wish I found some chords in an order that is new
        I wish I didn't have to rhyme every time I sang
        I was told when I get older, all my fears would shrink
        But now I'm insecure, and I care what people think
        My name's Blurryface and I care what you think
        My name's Blurryface and I care what you think
        Wish we could turn back time
        To the good old days
        When our mama sang us to sleep
        But now we're stressed out (oh)
        Wish we could turn back time (oh)
        To the good old days (oh)
        When our mama sang us to sleep
        But now we're stressed out
        We're stressed out
        Sometimes a certain smell will take me back to when I was young
        How come I'm never able to identify where it's coming from?
        I'd make a candle out of it if I ever found it
        Try to sell it, never sell out of it, I'd probably only sell one
        It'd be to my brother, 'cause we have the same nose
        Same clothes, homegrown, a stone's throw from a creek we used to roam
        But it would remind us of when nothing really mattered
        Out of student loans and tree house homes, we all would take the latter
        My name's Blurryface and I care what you think
        My name's Blurryface and I care what you think
        Wish we could turn back time
        To the good old days
        When our mama sang us to sleep
        But now we're stressed out (oh)
        Wish we could turn back time (oh)
        To the good old days (oh)
        When our mama sang us to sleep
        But now we're stressed out
        Used to play pretend, give each other different names
        We would build a rocket ship and then we'd fly it far away
        Used to dream of outer space, but now they're laughing at our face saying
        "Wake up, you need to make money", yeah
        We used to play pretend, give each other different names
        We would build a rocket ship and then we'd fly it far away
        Used to dream of outer space, but now they're laughing at our face saying
        "Wake up, you need to make money", yeah
        Wish we could turn back time
        To the good old days
        When our mama sang us to sleep
        But now we're stressed out (oh)
        Wish we could turn back time (oh)
        To the good old days (oh)
        When our mama sang us to sleep
        But now we're stressed out
        We used to play pretend, used to play pretend, money
        We used to play pretend, wake up, you need the money
        Used to play pretend, used to play pretend, money
        We used to play pretend, wake up, you need the money
        Used to play pretend, give each other different names
        We would build a rocket ship and then we'd fly it far away
        Used to dream of outer space, but now they're laughing at our face saying
        "Wake up, you need to make money", yeah`,
    },
    {
        img : 'img/UnlikePluto.jpg',
        name : 'Broken String',
        artist : 'Unlike Pluto',
        music : 'musicas/Broken.mp3',

        lyrics : `Looking like stormy day
        Don't think it'll go away
        So under my roof I'll stay
        That's alright, I'll just play my
        Guitar for a couple of hours
        Play my heart and play it louder
        Play until I break a string
        Oh it's alright, I've got all I need
        Just a broken string on a guitar
        But I've got five more
        Five more
        But I can play just fine
        It's more than enough
        More than enough
        I still play in tune
        I know the notes
        I know the tune
        Do you
        Just a string on a guitar
        I've got five more
        Five more
        At first glance you might think I'm incomplete, I'm not
        I've got plenty, I've got everything I need to play a song
        I strum a note, I strum a note, I hit a chord, I'm on a role
        I'm losing inhibition playing on playing 'cause I know
        It's just a broken string on a guitar
        But I've got five more
        Five more
        But I can play just fine
        It's more than enough
        More than enough
        I still play in tune
        I know the notes
        I know the tune
        Do you
        Just a string on a guitar
        I've got five more
        Five more`,
    },
    {   img : 'img/Sharks.jpg',
        name : 'Sharks',
        artist : 'Imagine Dragons',
        music : 'musicas/Sharks.mp3',

        lyrics : `Trouble
        Blood is in the rocky waters
        Hide away your sons and daughters
        Eat you alive
        Levels
        Better put your head on swivels
        Dancing with the very devil
        Butter to knife
        You think you're better than them
        Better than them
        You think they're really your friends
        Really your friends
        But when it comes to the end
        To the end
        You're just the same as them
        Same as them
        So let it go, let it go
        That's the way that it goes
        First you're in, then you're out
        Everybody knows
        You're hot, then you're cold
        You're a light in the dark
        Just you wait and you'll see
        That you're swimmin' with sharks
        He's comin' to get you (woo-woo)
        He's comin' to get you, get you (woo)
        Bubbles
        Drownin', you see in doubles
        Don't you let 'em see your struggles
        Hiding your tears
        Crisis
        Take advantage off your niceness
        Cut you up in even slices
        Prey on your fear
        You think you're better than them
        Better than them (you think you're better)
        You think they're really your friends
        Really your friends (really)
        But when it comes to the end
        To the end (oh, no)
        You're just the same as them
        Same as them
        So let it go, let it go
        That's the way that it goes
        First you're in, then you're out
        Everybody knows (ooh)
        You're hot, then you're cold
        You're a light in the dark
        Just you wait and you'll see
        That you're swimmin' with sharks
        Your blood is pumping (he's comin' to get you)
        Don't take it from me (woo-woo)
        Your blood is pumping (he's comin' to get you, get you)
        Don't take it from me
        Your blood is pumping (he's comin' to get you)
        Don't take it from me (woo-woo)
        Your blood is pumping (he's comin' to get you, get you)
        Don't take it from me
        Every time my heart is beating, I can feel the recipe
        I wonder if my day is coming, blame it on the entropy
        My blood is pumping, I can see the end is right in front of me
        Don't take it from me, I could be everything, everything
        (Sharks)
        Don't take it from me
        My blood is pumping, my blood is pumping (sharks)
        Don't take it from me, I could be everything, everything
        So let it go, let it go
        That's the way that it goes
        First you're in, then you're out
        Everybody knows
        You're hot, then you're cold
        You're a light in the dark
        Just you wait and you'll see
        That you're swimmin' with sharks
        Your blood is pumping (he's comin' to get you)
        Don't take it from me (woo-woo)
        Your blood is pumping (he's comin' to get you, get you)
        Don't take it from me
        Your blood is pumping (he's comin' to get you)
        Don't take it from me
        Your blood is pumping (he's comin' to get you, get you)
        Don't take it from me`,
    },
    {   img : 'img/Bones.jpg',
        name : 'Bones',
        artist : 'Imagine Dragons',
        music : 'musicas/Bones.mp3',

        lyrics : `Gimme, gimme, gimme some time to think
        I'm in the bathroom, looking at me
        Face in the mirror is all I need (ooh)
        Wait until the reaper takes my life
        Never gonna get me out alive
        I will live a thousand million lives (ooh)
        
        My patience is waning
        Is this entertaining?
        Our patience is waning
        Is this entertaining?
        
        I-I-I got this feeling, yeah, you know
        Where I'm losing all control
        'Cause there's magic in my bones
        I-I-I got this feeling in my soul
        Go ahead and throw your stones
        'Cause there's magic in my bones
        
        Playing with a stick of dynamite
        There was never gray in black and white
        There was never wrong 'til there was right (ooh, oh)
        
        Feeling like a boulder hurtling
        Seeing all the vultures circling
        Burning in the flames I'm working in
        Turning in a bed that's darkening
        
        My patience is waning
        Is this entertaining?
        Our patience is waning
        Is this entertaining?
        
        I-I-I got this feeling, yeah, you know
        Where I'm losing all control
        'Cause there's magic in my bones (in my bones)
        I-I-I got this feeling in my soul
        Go ahead and throw your stones
        'Cause there's magic in my bones
        'Cause there's magic in my bones
        
        Look in the mirror of my mind
        Turning the pages of my life
        Walking the path so many paced a million times
        Drown out the voices in the air
        Leaving the ones that never cared
        Picking the pieces up and building to the sky
        
        My patience is waning
        Is this entertaining?
        My patience is waning
        Is this entertaining?
        
        I-I-I got this feeling, yeah, you know
        Where I'm losing all control
        'Cause there's magic in my bones (magic in my bones)
        I-I-I got this feeling in my soul (soul)
        Go ahead and throw your stones
        'Cause there's magic in
        
        There goes my mind (I-I-I)
        Don't mind
        There goes my mind (there it goes, there it goes)
        There goes my mind (I-I-I)
        Don't mind (there it goes)
        There goes my mind
        'Cause there's magic in my bones`,
    },
    {   img : 'img/Influence.jpg',
        name : 'Under the Influence',
        artist : 'Chris Brown',
        music : 'musicas/Influence.mp3',

        lyrics : `Get up, get up
        Kiddominant on the beat, better run it back
        Fuckin' Robitussin
        I don't know why this shit got me lazy right now, yeah
        Can't do Percocets or Molly
        I'm turnin' one, tryna live it up here right, right, right
        Baby, you can
        Ride it, ooh, yeah
        Bring it over to my place
        And you be like
        "Baby, who cares?"
        But I know you care
        Bring it over to my place
        You don't know what you did, did to me
        Your body lightweight speaks to me
        I don't know what you did, did to me
        Your body lightweight speaks to me
        I can make it hurricane on it
        Hunnid bands, make it rain on it
        Tie it up, put a chain on it
        Make you tattoo my name on it, oh
        Make you cry like a baby, yeah
        Let's GoPro and make a video, yeah
        Make you cry like a baby, yeah
        Let's GoPro and make a video
        Oh, yeah, yeah, yeah, yeah
        Baby, you can
        Ride it, ooh, yeah
        Bring it over to my place
        And you be like
        "Baby, who cares?"
        But I know you care
        Bring it over to my place
        You don't know what you did, did to me
        Your body lightweight speaks to me
        I don't know what you did, did to me
        Your body lightweight speaks to me
        Baby, you can
        Ride it, ooh, yeah
        And you be like
        "Baby, who cares?"
        But I know you care`,
    },
    {   img : 'img/Seven.jpg',
        name : 'Seven',
        artist : 'Natalie Jane',
        music : 'musicas/Seven.mp3',

        lyrics : `You and I, what a lie
        Wasted time on a feeling
        I wish I saw the signs
        I was blind, it was thrilling (hn-hn)
        Was it ever really love?
        If the night that we broke up
        Both went out to go hookup
        With the one we told each other not to worry about
        Was it really everything?
        Was I caught up in a dream?
        Seven months was just a fling
        I'm starting to freak out
        Was it ever really love?
        (Ha-ha-haa, ha-ha-haa)
        Was it ever really?
        Remember when you said you wanted me to go blonde
        Well, now it makes sense that you ran right into her arms
        I bet you think she's nice, I bet she's just your type
        I can't blame you, guess we both got what we fantasized
        Was it ever really love?
        If the night that we broke up
        Both went out to go hookup
        With the one we told each other not to worry about
        Was it really everything?
        Was I caught up in a dream?
        Seven months was just a fling
        I'm starting to freak out
        Was it ever really love?
        (Ha-ha-haa, ha-ha-haa)
        Was it ever really love?
        If the night that we broke up
        Both went out to go hookup
        With the one we told each other not to worry about
        Was it really everything?
        Was I caught up in a dream?
        Seven months was just a, just a fling`,
    },
    {   img : 'img/Labiri.jpg',
        name : 'Mount Everest',
        artist : 'Labrinth',
        music : 'musicas/Everest.mp3',

        lyrics : `Mount Everest ain't got shit on me Mount Everest ain't got shit on me 
        'Cause I'm on top of the world I'm on top of the world, yeah Burj Dubai ain't got shit on me 
        You could touch the sky, but you ain't got shit on me 'Cause I'm on top of the world I'm on top of the world, 
        yeah Woop, woop Woop, woop Woop, woop Woop Sweet, sweet (Hey) Woop, woop Woop, woop Woop, woop Woop Sweet, 
        sweet I burn down my house and build it up again (Tell 'em) I burn it down twice just for the fun of it (Tell 'em) So much money, 
        I don't know what to do with it (Tell 'em) I don't pick up my phone, ain't no one worth the time (Tell 'em) I got me one gun and me an alibi 
        (Tell 'em) So much love that the whole thing feel like a lie I don't need nobody I don't need nobody I don't need nobody 
        I don't need nobody I don't need nobody I don't need nobody (To save me) Sweet, sweet Mount Everest ain't got shit on me`,
    },
    
    
    
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Tocando musica " + (track_index + 1) + " de " + music_list.length;

    lyrics.textContent = music_list[track_index].lyrics;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}
