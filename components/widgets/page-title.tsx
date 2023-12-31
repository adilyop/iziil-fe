import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { ReactNode } from "react";
interface Props {
  section: string,
  heading: string,
  children?: ReactNode
  // any props that come into the component
}
export function PageTitle({ section, heading, children }: Props) {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12 text-gray-500 mt-24">
      <Typography variant="lead" className="font-semibold">{section}</Typography>
      <Typography variant="h2" className="text-black my-3">
        {heading}
      </Typography>
      <Typography variant="lead" className="text-gray-500">
        {children}
      </Typography>
    </div>
  );
}

PageTitle.propTypes = {
  section: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
