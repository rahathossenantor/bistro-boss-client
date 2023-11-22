
const ContactForm = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 mb-20">
            <div className="border 2xl:p-16 xl:p-16 lg:p-8 md:p-8 p-5 bg-[#F3F3F3]">
                <form>
                    {/* first row */}
                    <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col flex-col gap-5 mb-5">
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
                            <label htmlFor="name" className="font-semibold text-lg text-[#1b1a1acc]">Full Name <span className="text-red-600">*</span></label>
                            <input type="text" title="name" placeholder="Enter your name" id="name" name="name" className="input input-bordered w-full rounded-none" required />
                        </div>
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
                            <label htmlFor="email" className="font-semibold text-lg text-[#1b1a1acc]">Email <span className="text-red-600">*</span></label>
                            <input type="email" title="email" placeholder="Enter your email" id="email" name="email" className="input input-bordered w-full rounded-none" required />
                        </div>
                    </div>
                    {/* second row */}
                    <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col flex-col gap-5 mb-5">
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
                            <label htmlFor="phone" className="font-semibold text-lg text-[#1b1a1acc]">Phone</label>
                            <input type="text" title="phone" placeholder="Enter your phone" id="phone" name="phone" className="input input-bordered w-full rounded-none" />
                        </div>
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
                            <label htmlFor="date" className="font-semibold text-lg">Date <span className="text-red-600">*</span></label>
                            <input type="date" title="date" id="date" name="date" className="input input-bordered w-full rounded-none" required />
                        </div>
                    </div>
                    {/* third row */}
                    <div className="mb-5">
                        <label htmlFor="details" className="font-semibold text-lg text-[#1b1a1acc]">Your Message</label>
                        <textarea rows="7" placeholder="Type details" id="details" name="details" className="textarea textarea-bordered w-full text-base rounded-none" />
                    </div>
                    <div className="text-center">
                        <input type="submit" value="Send Message" className="btn normal-case border-[#BB8506] text-[#BB8506] px-6 rounded-none" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;