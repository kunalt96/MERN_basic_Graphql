import React, { useEffect, useRef } from 'react';

const RefPrac = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h1>ye;</h1>
      <input ref={inputRef} type='text' className='form-control' />
    </div>
  );
};

// class RefPrac extends Component {
//   constructor(props) {
//     super(props);
//     this.inputRef = React.createRef();
//     this.cbRef = null;
//     this.setcbRef = (element) => {
//       this.cbRef = element;
//     };
//   }

//   componentDidMount() {
//     // this.inputRef.current.focus();
//     if (this.cbRef) {
//       this.cbRef.focus();
//     }
//   }

//   clickHandler = () => {
//     alert(this.inputRef.current.value);
//   };

//   render() {
//     return (
//       <div>
//         <input type='text' ref={this.inputRef} />
//         <button onClick={this.clickHandler}>Click</button>
//         <input type='text' ref={this.setcbRef} />
//       </div>
//     );
//   }
// }

export default RefPrac;

// 1)Create a ref
// 2)Attach this ref to element
// 3)Do the work - the logics

// use case
// fetching input value
// focus by default on page load

// CALLBACK Ref
// create ref
// method set as ref

// FUNCTION
// import useRef
// create ref varaible
