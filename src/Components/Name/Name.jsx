import PropTypes from 'prop-types';
import SHow from '../Show/SHow';

const Name = ({name1,creditTime}) => {
    return (
        <div className="md:w-1/3 pt-4">
            <h2 className='text-sky-700 text-2xl font-semibold mb-5'>Credit hours remaining  :  {creditTime} hr</h2>
            <hr/>
            <h2 className="text-3xl font-semibold mt-2">Course Name</h2>
            <ol>
                <li>
                {
                name1.map((name2,index) => <SHow key={name2.id} name2={name2} index={index}></SHow>)
            }
                </li>
            </ol>
        </div>
    );
};
Name.propTypes={
  
    name1:PropTypes.object,
    creditTime:PropTypes.number
}
export default Name;