const Wishlist = () => {
  return (
    <>
      <div className="text-foreground! mb-5">
        <h3 className="special mb-2!"> Whishlist</h3>
      </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
              {[...Array(5)].map((_, index) => (
                <WishlistItem key={index} />
              ))}Wishlist
            </div>
    </>
  );
};

export default Wishlist;

function  WishlistItem()  {
    return (
        <div>
            
    </div>);
}
 
