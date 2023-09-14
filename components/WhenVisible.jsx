import { motion } from "framer-motion";

export function WhenVisible ({children, duration}) {
    return (
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{  }}
        transition={{ duration: duration }}
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
        visible: { scale: 1, opacity: 1},
        hidden: { scale: 0.9, opacity: 0.4 }
      }}
    >
      {children}
    </motion.div>
  )
}