let pianoskibidi,
  drumskibidi,
  guitarskibidi = false;

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("firstinstrument")
    .addEventListener("click", function () {
      const pianoImg = document.getElementById("biginstrument");
      pianoImg.src =
        "https://id.yamaha.com/id/files/up_product_u3_po-ebo_988de7afc80458dd8a75afdecfd8e2ea.jpg?impolicy=resize&imwid=2000&imhei=2000";
      console.log("hi");
      pianoImg.style.display = "block";
      document.getElementById("firstinstrument").style.backgroundColor =
        "#A3A3A3";
      document.getElementById("thirdinstrument").style.backgroundColor =
        "#616161";
      document.getElementById("secondinstrument").style.backgroundColor =
        "#616161";
        drumskibidi = false;
        guitarskibidi = false;
        pianoskibidi = true;
      console.log(pianoskibidi, drumskibidi, guitarskibidi)
    });
  document
    .getElementById("secondinstrument")
    .addEventListener("click", function () {
      const pianoImg = document.getElementById("biginstrument");
      pianoImg.src =
        "https://e7.pngegg.com/pngimages/676/268/png-clipart-drum-drum.png";
      console.log("hi");
      pianoImg.style.display = "block";
      document.getElementById("firstinstrument").style.backgroundColor =
        "#616161";
      document.getElementById("thirdinstrument").style.backgroundColor =
        "#616161";
      document.getElementById("secondinstrument").style.backgroundColor =
        "#A3A3A3";
      drumskibidi = true;
      guitarskibidi = false;
      pianoskibidi = false;
      console.log(pianoskibidi, drumskibidi, guitarskibidi)
    });
  document
    .getElementById("thirdinstrument")
    .addEventListener("click", function () {
      const pianoImg = document.getElementById("biginstrument");
      pianoImg.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs3MPaNEthDrhrXShksF89_IjL7Zh1lYvvVg&s";
      console.log("hi");
      pianoImg.style.display = "block";
      document.getElementById("firstinstrument").style.backgroundColor =
        "#616161";
      document.getElementById("thirdinstrument").style.backgroundColor =
        "#A3A3A3";
      document.getElementById("secondinstrument").style.backgroundColor =
        "#616161";
        drumskibidi = false;
        guitarskibidi = true;
        pianoskibidi = false;
      console.log(pianoskibidi, drumskibidi, guitarskibidi)
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Mapping notes to both button IDs and keyboard keys
    const notes = {
      one: { key: "S", audioId: "C6Piano" },
      two: { key: "D", audioId: "D6Piano" },
      three: { key: "F", audioId: "E6Piano" },
      four: { key: "G", audioId: "F6Piano" },
      five: { key: "H", audioId: "G6Piano" },
      six: { key: "J", audioId: "A6Piano" },
      seven: { key: "K", audioId: "B6Piano" },
      eight: { key: "L", audioId: "C7Piano" },
    };
  
    // Add click event listeners for buttons
    Object.keys(notes).forEach((note) => {
      document.getElementById(note).addEventListener("click", function () {
        playNote(notes[note].audioId);
      });
    });
  
    // Add keydown event listener for keyboard input
    document.addEventListener("keydown", function (event) {
      const pressedKey = event.key.toUpperCase(); // Convert to uppercase for matching
      const note = Object.values(notes).find((n) => n.key === pressedKey);
  
      if (note) {
        playNote(note.audioId);
      }
    });
  
    // Function to play the note
    function playNote(audioId) {
      if (pianoskibidi) {
        const pianoAudio = document.getElementById(audioId);
        pianoAudio.currentTime = 0; // Reset the audio to start from the beginning
        pianoAudio.play();
      } else if (guitarskibidi) {
        console.log("Play guitar sound for", audioId); // Add guitar logic here
      } else if (drumskibidi) {
        console.log("Play drum sound for", audioId); // Add drum logic here
      } else {
        console.log("Notes are not active.");
      }
    }
  });
  