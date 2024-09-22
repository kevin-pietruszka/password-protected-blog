import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function CreateBlog() {
  return (
    <Button className="flex gap-2">
      Create Blog
      <Plus />
    </Button>
  ); 
}
