// All code is free, use it.
// https://gist.github.com/magalhaespaulo/737a5c35048c18b8a2209d8a9fae977c
//
import { createPortal } from "react-dom";
import {
  Dispatch,
  HTMLAttributes,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

const effect = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 600,
      damping: 30,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Backdrop = ({ children, onClose }: BackdropProps) => (
  <motion.div
    className="
      z-50 fixed inset-0
      flex items-center justify-center
      bg-backdrop backdrop-filter backdrop-blur-sm
    "
    onClick={onClose}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
);

const ModalContent = ({
  className,
  children,
  onClose,
  ariaLabel,
}: ModalContentProps) => (
  <motion.div
    tabIndex={-1}
    role="dialog"
    aria-modal={true}
    aria-label={ariaLabel}
    className={`relative ${
      className || "m-5 p-5 bg-white rounded-lg shadow-lg"
    }`}
    variants={effect}
    initial="hidden"
    animate="visible"
    exit="exit"
    onClick={(event) => event.stopPropagation()}
  >
    {children}
    {onClose && (
      <button
        className="absolute top-0 right-0 p-2"
        onClick={onClose}
        aria-label={`Close ${ariaLabel || "dialog"}`}
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
        </svg>
      </button>
    )}
  </motion.div>
);

export const Modal = ({
  children,
  className,
  isOpen,
  onClose,
  hideCloseButton,
  backdropDismiss = true,
  onExitComplete,
  ariaLabel,
}: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [trigger, setTrigger] = onExitComplete ?? [undefined, undefined];

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen || event.key !== "Escape") return;

      onClose();
    },
    [isOpen, onClose],
  );

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, isOpen]);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) return <></>;

  return createPortal(
    <AnimatePresence
      initial={false}
      mode="wait"
      onExitComplete={() =>
        setTrigger && trigger === "fired" && setTrigger("completed")
      }
    >
      {isOpen && (
        <Backdrop onClose={backdropDismiss ? onClose : undefined}>
          <ModalContent
            className={className}
            onClose={hideCloseButton ? undefined : onClose}
            ariaLabel={ariaLabel}
          >
            {children}
          </ModalContent>
        </Backdrop>
      )}
    </AnimatePresence>,
    document.getElementById("modal-portal")!,
  );
};

type ModalProps = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  onClose: () => void;
  hideCloseButton?: boolean;
  backdropDismiss?: boolean;
  onExitComplete?: [
    "fired" | "completed" | undefined,
    Dispatch<SetStateAction<"fired" | "completed" | undefined>>,
  ];
  ariaLabel?: string;
};

type ModalContentProps = HTMLAttributes<HTMLDivElement> & {
  onClose?: () => void;
  ariaLabel?: string;
};

type BackdropProps = HTMLAttributes<HTMLDivElement> & {
  onClose?: () => void;
};

export default Modal;
