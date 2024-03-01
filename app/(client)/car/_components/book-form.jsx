// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import axios from "axios";

// const FormSchema = z.object({
//   phone: z
//     .string()
//     .min(10, {
//       message: "Phone number must be at least 10 characters.",
//     })
//     .max(10, {
//       message: "Phone number must be 10 characters.",
//     }),
// });

// export const BookForm =  ({ id, price }) => {
//   const form = useForm({
//     resolver: zodResolver(FormSchema),
//   });

//   async function onSubmit(values) {
//     console.log(values)
//     try {
//         const resp=await axios.post('/api/stk',{
//             amount:`${parseFloat(price)}`,
//             phone:values.phone,
//             id
//         })
//         console.log(resp?.data)
//     } catch (error) {
//         console.log(error)
//     }
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
//         <FormField
//           control={form.control}
//           name="phone"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Phone Number*</FormLabel>
//               <FormControl>
//                 <Input placeholder="0710221911" {...field} />
//               </FormControl>

//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit" className='w-full bg-emerald-500 hover:bg-emerald-700 text-white'>CheckOut</Button>
//       </form>
//     </Form>
//   );
// };

"use client";
import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { toast } from "sonner";

export const BookForm = ({ price, id }) => {
  return (
    <div>
      <PayPalButtons
        style={{
          label: "checkout",
        }}
        onApprove={(data, actions) => {
          console.log("approved", data);
          actions.order.capture();

          toast.success(`Payment with orderId ${data.orderID} was successful`);
        }}
        onCancel={(data) => {
          toast.error(`Transaction with orderId ${data.orderID} was cancelled`)
        }}
        createOrder={async () => {
          const resp = await axios.post("/api/checkout", {
            reserveId: id,
            price,
          });

          const order = resp?.data;

          return order.id;
        }}
      />
    </div>
  );
};
