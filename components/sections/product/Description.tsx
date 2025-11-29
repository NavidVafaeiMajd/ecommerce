const Description = ({des} : {des:string | undefined | null}) => {
  return (
    <div>
      <h3 className="special  mt-20">Product Description</h3>
          <p className="text-ring">{ des}</p>
    </div>
  );
};

export default Description;
