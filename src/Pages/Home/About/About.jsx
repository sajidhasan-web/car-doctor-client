import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="flex flex-col-reverse  md:flex-row gap-6  md:gap-16 mt-20 md:mt-24 lg:mt-32">
            <div className="w-full h-full relative">
                <img src={person} className="w-3/4 h-3/4 object-cover rounded-xl" alt="" />
                    <img className=" object-cover w-1/2 h-2/3 absolute right-0 -bottom-20 border-8 border-white rounded-lg" src={parts} alt="" />
            </div>
            <div className="w-full space-y-5  lg:space-y-8">
                <p className="text-xl font-bold text-[#FF3811]">About us</p>
                <h3 className="text-xl md:text-5xl font-bold">We are qualified & of experience in this field</h3>
                <p className="text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button className="btn btn-sm md:btn-lg bg-[#FF3811] font-semibold text-white border-none">Get More Info</button>
            </div>
        </div>
    );
};

export default About;