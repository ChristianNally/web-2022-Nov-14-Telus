const Listing = (props) => {

  console.log('props', props);

  return (
    <div>
      <span>{ props.name }</span>&nbsp;<span>{ props.number }</span>
    </div>
  );
};

export default Listing;
