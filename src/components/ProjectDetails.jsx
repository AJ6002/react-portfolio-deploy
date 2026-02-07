// // import { motion } from "motion/react";
// // const ProjectDetails = ({
// //   title,
// //   description,
// //   subDescription,
// //   image,
// //   tags,
// //   href,
// //   closeModal,
// // }) => {
// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
// //       <motion.div
// //         className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
// //         initial={{ opacity: 0, scale: 0.5 }}
// //         animate={{ opacity: 1, scale: 1 }}
// //       >
// //         <button
// //           onClick={closeModal}
// //           className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
// //         >
// //           <img src="assets/close.svg" className="w-6 h-6" />
// //         </button>
// //         <img src={image} alt={title} className="w-full rounded-t-2xl" />
// //         <div className="p-5">
// //           <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
// //           <p className="mb-3 font-normal text-neutral-400">{description}</p>
// //           {subDescription.map((subDesc, index) => (
// //             <p className="mb-3 font-normal text-neutral-400">{subDesc}</p>
// //           ))}
// //           <div className="flex items-center justify-between mt-4">
// //             <div className="flex gap-3">
// //               {tags.map((tag) => (
// //                 <img
// //                   key={tag.id}
// //                   src={tag.path}
// //                   alt={tag.name}
// //                   className="rounded-lg size-10 hover-animation"
// //                 />
// //               ))}
// //             </div>
// //             <a className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation">
// //               View Project{" "}
// //               <img src="assets/arrow-up.svg" className="size-4" href={href} />
// //             </a>
// //           </div>
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default ProjectDetails;
// import { motion } from "framer-motion";

// const ProjectDetails = ({
//   title,
//   description,
//   subDescription = [],
//   image,
//   tags,
//   techIcons,
//   closeModal,
// }) => {
//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/70"
//       onClick={closeModal}
//     >
//       <motion.div
//         onClick={(e) => e.stopPropagation()}
//         className="relative max-w-2xl w-full rounded-2xl border border-white/10 bg-gradient-to-br from-midnight to-navy shadow-xl"
//         initial={{ opacity: 0, scale: 0.6 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.6 }}
//         transition={{ type: "spring", stiffness: 260, damping: 20 }}
//       >
//         {/* CLOSE */}
//         <button
//           onClick={closeModal}
//           className="absolute top-4 right-4 p-2 rounded-md bg-black/40 hover:bg-black/60"
//         >
//           ✕
//         </button>

//         <img
//           src={image}
//           alt={title}
//           className="w-full rounded-t-2xl"
//         />

//         <div className="p-6">
//           <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
//           <p className="text-neutral-400 mb-4">{description}</p>

//           {subDescription.map((item, i) => (
//             <p key={i} className="text-neutral-400 mb-2">
//               {item}
//             </p>
//           ))}

//           <div className="flex gap-4 mt-6">
//             {tags.map(
//               (tag) =>
//                 techIcons[tag] && (
//                   <img
//                     key={tag}
//                     src={techIcons[tag]}
//                     alt={tag}
//                     className="size-10"
//                   />
//                 )
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ProjectDetails;
