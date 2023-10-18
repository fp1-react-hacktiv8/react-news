import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="footer-content">
        <div>
          <a href="" to="/" className="flex-1">
            <p className="text-4xl text-primary mb-5">
              <b>ForNews</b>
            </p>
          </a>
          <p>Menyulap Berita Menjadi Pengetahuan</p>
        </div>
        <div>
          <span className="text-primary font-bold">Partner</span>
          <a className="link link-hover" href="https://www.hacktiv8.com/">
            Hacktiv8
          </a>
          <a
            className="link link-hover"
            href="https://kampusmerdeka.kemdikbud.go.id/"
          >
            Kampus Merdeka
          </a>
          <a
            className="link link-hover"
            href="https://www.linkedin.com/in/arrizalrahmat/"
          >
            Arrizal Rahmat
          </a>
        </div>
        <div>
          <span className="text-primary font-bold">Github</span>
          <a
            className="link link-hover"
            href="https://github.com/fp1-react-hacktiv8/react-news"
          >
            Fp-1 Team 04
          </a>
        </div>
        <div>
          <span className="text-primary font-bold">Team</span>
          <Contact
            name="Ali Rosi"
            linkIG="https://www.instagram.com/rossi88z/"
            linkLI="https://www.linkedin.com/in/alirosi3214/"
          />
          <Contact name="Yusron Fauzan Nasrullah" linkIG="" linkLI="" />
          <Contact
            name="Arya Bhima Andika"
            linkIG="https://www.instagram.com/bimaandika_jr"
            linkLI="https://www.linkedin.com/in/arya-bhima-andika-7816a4296/"
          />
          <a href="#my-modal" className="!underline justify-self-center">
            More
          </a>

          <label id="my-modal" className="modal cursor-pointer">
            <label className="modal-box w-11/12 max-w-6xl relative">
              <center>
                <b>
                  <h1 className="text-2xl font-bold">ForNews Team 04</h1>
                </b>
              </center>

              <div className="flex justify-center gap-6 lg:grid-cols-3 sm:grid-cols-2 w-30 m-4">
                <div className="flex flex-col text-center py-2 px-6 rounded-md border border-black">
                  <p className="py-4">Member</p>
                  <img
                    src="src/assets/foto/ali.png"
                    className="px-4 aspect-[1/1] rounded-2xl"
                  />
                  <h1 className="text-lg px-6 py-5">Ali Rosi</h1>
                  <p className="text-center px-4 ">RCTN-KS08-020</p>

                  <div className="flex flex-row mt-4 px-4 py-1"></div>
                </div>

                <div className="flex flex-col text-center py-2 px-6 rounded-md border border-black">
                  <p className="py-4">Lead</p>
                  <img
                    src="src/assets/foto/sb.jpeg"
                    className="px-4 aspect-[1/1] rounded-2xl"
                  />
                  <h1 className="text-lg px-4 py-5">Yusron Fauzan Nasrullah</h1>
                  <p className="text-center px-4 ">RCTN-KS08-019</p>
                  <div className="flex flex-row mt-4 px-4 py-1"></div>
                </div>

                <div className="flex flex-col text-center py-2 px-6 rounded-md border border-black">
                  <p className="py-4">Member</p>
                  <img
                    src="src/assets/foto/arya.jpg"
                    className="px-4 aspect-[1/1] rounded-2xl"
                  />
                  <h1 className="text-lg px-4 py-5">Arya Bhima Andika</h1>
                  <p className="text-center px-4 ">RCTN-KS08-018</p>
                  <div className="flex flex-row mt-4 px-4 py-1"></div>
                </div>
              </div>
              <div className="modal-action">
                <a
                  href="#"
                  className="bg-primary btn-circle absolute btn top-2 right-2 text-base-100 font-bold"
                >
                  X
                </a>
              </div>
            </label>
          </label>
        </div>
      </footer>
    </>
  );
};

export default Footer;

// eslint-disable-next-line react/prop-types
function Contact({ name, linkIG, linkLI }) {
  return (
    <div className="flex justify-between w-56 align-middle">
      <p>{name}</p>
      <div className="flex">
        <a
          href={linkIG}
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
        >
          <AiOutlineInstagram className="ml-3" size={20} />
        </a>
        <a
          href={linkLI}
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
        >
          <AiOutlineLinkedin className="ml-2" size={20} />
        </a>
      </div>
    </div>
  );
}
