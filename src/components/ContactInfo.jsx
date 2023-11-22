import phoneIcon from "../assets/telephone.png";
import locationIcon from "../assets/location.png";
import clockIcon from "../assets/clock.png";

const cards = [
    {
        id: 1,
        icon: phoneIcon,
        heading: "PHONE",
        subInfo: "+38 (012) 34 56 789"
    },
    {
        id: 2,
        icon: locationIcon,
        heading: "ADDRESS",
        subInfo: "Road No: 1, AB Avenue, Moscow, Russia"
    },
    {
        id: 3,
        icon: clockIcon,
        heading: "WORKING HOURS",
        subInfo: "Mon - Fri: 08:00 - 22:00 Sat - Sun: 10:00 - 23:00"
    },
];

const ContactInfo = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 mb-20">
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {
                    cards.map(card =>
                        <div key={card.id} className="border">
                            <div className="flex items-center justify-center p-5 bg-[#D1A054]">
                                <img src={card.icon} alt="icon" className="inline-block" />
                            </div>
                            <div className="px-5 pb-5 text-center">
                                <div className="bg-[#F3F3F3] py-10">
                                    <h5 className="text-2xl mb-1">{card.heading}</h5>
                                    <p>{card.subInfo}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ContactInfo;
