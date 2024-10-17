

const Button = ({setVisible}) => {
    return (
      <button onClick={() => setVisible((prevVisible) => !prevVisible)}>
        Click Me
      </button>
    )
  }

export default Button;