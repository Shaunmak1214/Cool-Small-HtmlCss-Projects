const App = () => {
    const [startAnimate, setStartAnimate] = React.useState(false);
    const [highlightTopPosition, setStateHighlightTopPosition] = React.useState(0);
    const [currCount, setCurrCount] = React.useState(0);
  
    const onClickTab = (count) => {
      setStartAnimate(false);
      setCurrCount(count);
      setStateHighlightTopPosition(count * 52);
  
      setTimeout(() => {
        setStartAnimate(true);
      }, 100);
    }
  
    React.useEffect(() => {
      
      setTimeout(() => {
        setStartAnimate(true);
      }, 500);
  
      return () => {
        
      }
    }, []);
  
    return (
      <div className="container">
          {/* <h1>Sidebar animation example</h1> */}
          <div className="sidebar">
            <div style={{ top: `${highlightTopPosition}px` }} className={`sidebar__highlight ${startAnimate && 'sidebar__highlight__animate'}`}></div>
            {/* note: will still have to think about this implementation */}
            {/* <div style={{ position: "absolute", height: "500px", width: "50px", backgroundColor: "#049DBF", zIndex: "-1" }}></div> */}
  
            <a className={currCount === 0 && 'active'} href="#home" onClick={() => onClickTab(0)}>
              <span className={currCount === 0 && 'text-active'}><i class="fas fa-arrow-right"></i> Home</span>
            </a>
            <a className={currCount === 1 && 'active'} href="#news" onClick={() => onClickTab(1)}>
              <span className={currCount === 1 && 'text-active'}><i class="fas fa-arrow-right"></i> News</span>
            </a>
            <a className={currCount === 2 && 'active'} href="#contact" onClick={() => onClickTab(2)}>
              <span className={currCount === 2 && 'text-active'}><i class="fas fa-arrow-right"></i> Contact</span>
            </a>
            <a className={currCount === 3 && 'active'} href="#about" onClick={() => onClickTab(3)}>
              <span className={currCount === 3 && 'text-active'}><i class="fas fa-arrow-right"></i> About</span>
            </a>
          </div>
        </div>
    )
  }
  
  
  ReactDOM.render(<App />, document.getElementById("root"));