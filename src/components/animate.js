const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, y: 0, scale:1, transition: { duration: 0.4, ease: "easeOut" } },
};

const hoverEffect = {scale: 0.9, boxShadow: "0px 0px 4px rgba(255, 255, 255, 1)", transition: { duration: 0.2, ease: "easeOut" } };

const hoverCard = {boxShadow: "0px 0px 4px rgba(255, 255, 255, 1)", transition: { duration: 0.2, ease: "easeOut" } };


const buttonVariants = {
    hover: { y: -2, scale: 1.05, boxShadow: "0px 4px 15px rgba(72, 187, 120, 0.4)", transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
};
const sidebarVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    hover: { x: 5, backgroundColor: "rgb(55, 65, 81)", transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

export {cardVariants,hoverEffect,buttonVariants,sidebarVariants,hoverCard }