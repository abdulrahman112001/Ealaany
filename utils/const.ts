export const stepperStyles = {
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row", 
    "@media (max-width: 768px)": {
        flexDirection: "column !important",  
        fleWrap: "wrap",
    },
  },
  steps: {
    marginTop: 100,
    "@media (max-width: 768px)": {
      marginTop: 50,
    },
  },
  stepIcon: {
    width: 40,
    height: 40,
    minWidth: 40,
    minHeight: 40,
    backgroundColor: "transparent",
    borderColor: "#606060",
    borderRadius: "50%",
    border: "2px solid gray",
    transition: "border-color 0.3s",
    "@media (max-width: 480px)": {
      width: 30, // تصغير حجم الأيقونة
      height: 30,
    },
  },
}

