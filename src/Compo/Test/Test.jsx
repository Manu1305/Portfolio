// import React from "react";
// // import { CameraRoll } from "@react-native-camera-roll/camera-roll";
// import { CameraRoll } from "@react-native-camera-roll/camera-roll";
// class ImageSelector extends React.Component {
//   selectImages = async () => {
//     try {
//       const [fileHandle] = await window.showOpenFilePicker({
//         types: [
//           {
//             description: "Images",
//             accept: {
//               "image/*": [".jpg", ".jpeg", ".png", ".gif"],
//             },
//           },
//         ],
//       });

//       const imageFile = await fileHandle.getFile();
//       const imageBlob = await imageFile.blob();

//       // Process the selected image, for example, you can display it or upload it to a server.
//       this.displayImage(imageBlob);
//     } catch (error) {
//       console.error("Error accessing images:", error);
//     }
//   };

//   displayImage = (blob) => {
//     const url = URL.createObjectURL(blob);
//     const imageElement = document.createElement("img");
//     imageElement.src = url;
//     document.body.appendChild(imageElement);
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.selectImages}>Select Images</button>
//       </div>
//     );
//   }
// }

// export default ImageSelector;
