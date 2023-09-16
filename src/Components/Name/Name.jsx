import PropTypes from 'prop-types';
import SHow from '../Show/SHow';

const Name = ({name1,creditTime,creditTime1,prices}) => {
    return (
        <div className="md:w-1/3 pt-4">
            <h2 className='text-sky-700 text-2xl font-semibold mb-5'>Credit hours remaining  :  {creditTime} hr</h2>
            <hr/>
            <h2 className="text-3xl font-semibold mt-5 mb-5">Course Name </h2>

                {
                name1.map((name2,index) => <SHow key={name2.id} name2={name2} index={index}></SHow>)
            }
       <hr/>
            <h2 className='text-2xl font-semibold mt-5 mb-5'>Total credit hour :{creditTime1} </h2>
    
        <hr/>
        <h2 className='text-1xl font-semibold mt-2'>Price: {prices} taka</h2>
        </div>
    );
};
Name.propTypes={
  
    name1:PropTypes.object,
    creditTime:PropTypes.number,
    creditTime1:PropTypes.number,
    prices:PropTypes.number
   

}
export default Name;