import Image from "next/image";
import Link from "next/link";
import {
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Container } from "@/src/components/atoms/Container";
import PluscashLogoFooter from "@/public/images/pluscash-logo-white.svg";
import { Button } from "../atoms/Button";

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white">
      <Container className="my-10 sm:my-20 ">
        <div className="grid grid-cols-2">
          <div className="py-4">
            <h3 className="text-red-400 text-base font-bold">
              Still Not Sure?
            </h3>
            <h2 className="text-3xl">
              Speak to us<span className="text-red-400">.</span>
            </h2>
          </div>
          <div className="flex justify-end">
            <Button
              href="mailto:pluscash@pluscapital.co.in"
              variant="secondary"
            >
              Email Us
            </Button>
            <Button href="tel:+916364635635">Connect Via Call</Button>
          </div>
        </div>
        <hr className="my-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-between gap-5 items-center">
          <div>
            <Image
              src={PluscashLogoFooter}
              width={183}
              height={40}
              alt="PlusCash"
            />
            <div className="tracking-wider">
              <span className="text-base sm:text-base opacity-80">
                Built with
                <FaHeart className="inline text-red-400 ml-1 mr-1" />
                in India
              </span>
            </div>
          </div>
          <div>
            <div className="flex sm:justify-end space-x-4 my-4 justify-center text-gray-200">
              <Link href="/team">Team</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/blog">Blog</Link>
            </div>
            <div className="flex sm:justify-end space-x-4 my-4 justify-center">
              <a
                href="https://www.linkedin.com/company/plus-cash/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="h-8 w-8 text-blue-500 hover:text-blue-600" />
              </a>
              <a
                href="https://twitter.com/PlusCash_Club"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="h-8 w-8 text-blue-400 hover:text-blue-500" />
              </a>
              <a
                href="https://www.instagram.com/pluscash_club/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="h-8 w-8 text-pink-500 hover:text-pink-600" />
              </a>
              <a
                href="https://youtube.com/@Plus_Cash"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube className="h-8 w-8 text-red-500 hover:text-red-600" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
