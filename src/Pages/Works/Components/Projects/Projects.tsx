import image from '../../assets/default.png'
type Props = {};

export const Projects = (_props: Props) => {
  const data = [
    {
      image: image,
      title: "Unnathi (KES)",
      description: "Kerala Empowerment Society | UI/UX Design + Development",
    },
    {
      image: image,
      title: "OpenGrad",
      description: "Non Governmental Organization | UI/UX Design + Development",
    },
    {
     image: image,
      title: "OpenGrad",
      description: " ",
    },
    {
     image: image,
      title: "OpenGrad",
      description: " ",
    },
    {
     image: image,
      title: "OpenGrad",
      description: " ",
    },
    {
     image: image,
      title: "OpenGrad",
      description: " ",
    },
    {
     image: image,
      title: "OpenGrad",
      description: " ",
    },
    {
     image: image,
      title: "OpenGrad",
      description: " ",
    },
    {
     image: image,
      title: "OpenGrad",
      description: " ",
    },
    {
     image: image,
      title: "OpenGrad",
      description: " ",
    },
    {
     image: image,
      title: "OpenGrad",
      description: " ",
    },
    {
     image: image,
      title: "OpenGrad",
      description: " ",
    },
  ];
  return <div>{data.map(({image,title,description})=>{
    return(
        <div>
            <img src={image} alt="" />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
  })}</div>;
};
