import PropTypes from 'prop-types';
import './Course.css'
import { FaDollarSign } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';

const Course = ({course,HandleBtn}) => {
    const {name,img,details,hours,price}=course;
    return (
        <div >
          
            <div className='card p-5 ' >
                    <img  src={img} alt="" />
                    <div className='p-2'>
                    <h2 className='text-3xl font-semibold m-2'>{name}</h2>
                    <p>{details}</p>
                    </div>
                    <div className='flex m-5 font-semibold justify-evenly'>
                        <div className='text-2xl'>
                           <FaDollarSign></FaDollarSign>
                        </div>
                        <div>
                              <span>Price:{price}</span>
                        </div>
                        <div className='text-2xl'>
                          <FaBookOpen ></FaBookOpen>
                        </div>
                        <div>
                        <span>Credit: {hours}</span>
                        </div>
                    </div>
                    
                    <button onClick={() => HandleBtn(course,hours)} className="bg-sky-500 text-2xl text-white  mr-20 ml-11 pl-20 pr-20 pt-2 pb-2 rounded-xl hover:bg-sky-700">Select</button>
            </div>
           
        </div>
    );
};
Course.propTypes={
    course: PropTypes.object.isRequired,
    HandleBtn:PropTypes.func
}
export default Course;