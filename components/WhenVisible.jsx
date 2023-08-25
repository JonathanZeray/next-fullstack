import { motion } from "framer-motion";

export function WhenVisible ({children}) {
    return (
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{  }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1},
          hidden: { opacity: 0 }
        }}
      >
        {children}
      </motion.div>
    )
}

export function VisibleExpand ({children}) {
  return (
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{  }}
      transition={{ duration: 1.2 }}
      variants={{
        visible: { scale: 1},
        hidden: { scale: 0.7 }
      }}
    >
      {children}
    </motion.div>
  )
}