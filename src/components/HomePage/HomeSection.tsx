// import { useEffect, useState } from "react";
// import { getDownloadURL, ref, listAll, getMetadata } from "firebase/storage";
// import { storage } from "../../config/firebase";

function HomeSection() {
  
//   const [imageURLs, setImageURLs] = useState<string[]>([]);
//   const [imageNames, setImageNames] = useState<string[]>([]);

//   useEffect(() => {
//     const storageRef = ref(storage, "Shoes");
//     listAll(storageRef)
//       .then((res) => {
//         const promises = res.items.map((itemRef) => {
//           const promise1 = getDownloadURL(itemRef);
//           const promise2 = getMetadata(itemRef).then((metadata) => {
//             const name = metadata.name;
//             return name.slice(0, -4); // Obcina ostatnie 4 znaki (rozszerzenie pliku)
//           });
//           return Promise.all([promise1, promise2]);
//         });
//         Promise.all(promises)
//           .then((results) => {
//             const urls = results.map((result) => result[0]);
//             const names = results.map((result) => result[1]);
//             setImageURLs(urls); // Ustaw listę adresów URL w stanie komponentu
//             setImageNames(names); // Ustaw listę nazw plików w stanie komponentu
//           })
//           .catch((error) => {
//             console.error("Error getting download URLs and names:", error);
//           });
//       })
//       .catch((error) => {
//         console.error("Error listing files:", error);
//       });
//   }, []);

//   return (
//     <div className="bg-gray-300">
//       {imageURLs.map((url, index) => (
//         <img loading="lazy" key={index} src={url} alt={imageNames[index]} />
//       ))}
//     </div>
//   );
// 
// 
return <p>ds</p>
}
export default HomeSection;
