import computer from '@/assets/computer.svg'
import arrowRight from '@/assets/arrow-right.svg'
import permission from '@/assets/permission.svg'
import product from '@/assets/product.svg'
import user from '@/assets/user.svg'
function Main() {
  return (
    <div className="">
      <div className="flex justify-between mt-10 max-w-md m-auto">
        <div className="flex items-center">
          <img className="w-24 sm:w-36" src={computer} alt="computer" />
        </div>

        <div className="flex items-center">
          <img className="w-24 sm:w-36" src={arrowRight} alt="arrow-right" />
        </div>
        <div className="flex flex-col ">
          <img className="w-14 sm:w-24 border-2 border-solid border-[#313743] p-4" src={user} alt="arrow-right" />
          <img className="w-14 sm:w-24 border-2 border-solid border-[#313743] p-4 mt-3" src={product} alt="product" />
          <img
            className="w-14 sm:w-24 border-2 border-solid border-[#313743] p-4 mt-3"
            src={permission}
            alt="permission"
          />
        </div>
      </div>
    </div>
  )
}

export default Main
