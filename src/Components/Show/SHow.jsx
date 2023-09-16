import PropTypes from 'prop-types';

const SHow = ({name2,index}) => {
    const {name}=name2;
    //show courses name
    return (
        <div>
       
           <h2 className='text-2xl m-5'>{index+1}  {name}</h2>
          
        </div>
    );
};
SHow.propTypes={
  
    name2:PropTypes.object,
    index:PropTypes.number
}
export default SHow;