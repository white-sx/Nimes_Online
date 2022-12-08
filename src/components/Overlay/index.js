

function Label({text}) {
  return (
    <div style={{backgroundColor:"red",maxWidth:"110px", borderRadius: "5px",color:"#F2f2f2",padding:"5px"}}>
      <span className="ms-1">{text}</span>
    </div>
  );
}

export default Label;
