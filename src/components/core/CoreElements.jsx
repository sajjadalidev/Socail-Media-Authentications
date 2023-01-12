import { Button } from "antd";
export const ButtonTag = ({ buttonTitle, onClick }) => {
  return (
    <Button className="mb-2" onClick={onClick}>
      {buttonTitle}
    </Button>
  );
};
