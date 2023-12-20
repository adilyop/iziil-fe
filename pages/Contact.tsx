import { DefaultTemplate } from "../components/templates/DefaultTemplate";
import { HeaderComponent } from "../components/header/headerComponent";
import { PageTitle } from "../components/widgets/page-title";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";


// import welcomeImage from '../../assets/images/template.jpg';

export default function HomePage() {


  function openNavBar() {
    console.log('fofo')
  }

  return (
    <DefaultTemplate>
      <HeaderComponent></HeaderComponent>
      <PageTitle section="Contact Us" heading="Want to work with us?">
        Complete this form and we will get back to you in 24 hours.
      </PageTitle>
      <form className="mx-auto w-full mt-12 lg:w-5/12">
        <div className="mb-8 flex gap-8">
          <Input className="outlined lg text-black pl-4" placeholder="Full Name" />
          <Input className="outlined lg text-black pl-4" placeholder="Email" />
        </div>
        <Textarea className="outlined lg text-black pl-4" placeholder="Message" rows={8} />

        <Button size="lg" color="red" variant="outlined" className="w-64 h-12 background-red">
          <span className="w-64 h-12 background-red text-black">Send Message</span>
        </Button>
      </form>
      <div className="bg-white py-8 text-center text-gray-500">
        iZiil.com All right reserved 2023
      </div>
    </DefaultTemplate>
  );
}
