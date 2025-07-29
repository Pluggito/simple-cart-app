import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/productSlice";
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function SearchBar(){
    const dispatch = useDispatch();
    const searchQuery = useSelector((state) => state.products.searchQuery);

     const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value))
  }

  return (
    <div className="relative max-w-md mx-auto mb-8">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <Input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="pl-10"
      />
    </div>
  )
}