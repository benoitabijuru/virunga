import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Newsletter = () => {
  return (
    <div className="">
   
    <div className="flex w-full max-w-sm items-center space-x-2">
        <p className="text-orange-500">Sign-Up to our Newsletter</p>
    <Input type="text" placeholder="Full" />
    <Input type="email" placeholder="Email" />
    <Button type="submit" className="bg-green-500">Subscribe</Button>
    </div>
 
        </div>
  )
}

export default Newsletter