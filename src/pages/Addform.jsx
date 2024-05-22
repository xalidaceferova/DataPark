import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormMessage } from "../common/components/ui/form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/common/components/ui/form";
import { Button } from "@/common/components/ui/button";
import { Input } from "../common/components/ui/input";
import { RiMapPinLine } from "react-icons/ri";
import { MdOutlineTableView } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { IoIosCalendar } from "react-icons/io";
import { PiSelectionBackground } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { Textarea } from "@/common/components/ui/textarea";
import { postData } from "@/services/api/queries";
import toast, { Toaster } from "react-hot-toast";
const formSchema = z.object({
  header: z.string().min(1,{
    required_error: "Required field",
  }),
  min_salary: z.coerce.number(),
  max_salary: z.coerce.number(),
  posting_date: z.string().min(1,{
    message: "Required field",
  }),
  job_type: z.string().min(1,{
    required_error: "Required field",
  }),
  level: z.string().min(1,{
    required_error: "Required field",
  }),
  education: z.string().min(1,{
    required_error: "Required field",
  }),
  job_description: z.string().min(1,{
    required_error: "Required field",
  }),
  company_site_link: z.string().url({
    required_error: "Required field",
  }),
  email_address: z.string().email({
    required_error: "Required field",
  }),
  position: z.string().min(1,{
    required_error: "Required field",
  }),
});
const Addform = () => {
  const {reset, handleSubmit, ...form} = useForm({
    resolver: zodResolver(formSchema),
    defaultValues:{
      header:"",
      min_salary:"",
      max_salary:"",
      posting_date:"",
      job_type:"",
      level:"",
      education:"",
      job_description:"",
      company_site_link:"",
      email_address:"",
      position:""
    }
  });
  const onSubmit = async (values) => {
    await postData("/career/vacancy/", values)
      .then((data) => {
        console.log("Post isteği başarıyla tamamlandı:", data);
        toast.success("post job successfully");
        if (typeof reset === 'function') {
          reset();
      } else {
          console.error("Reset function is not available");
      }
       
      })
      .catch((error) => {
        console.error("Post isteği başarısız oldu:", error);
        toast.error("post error");
      });
     
  };
   
  return (
    <>
      <section className="flex items-center justify-center">
        <div className="max-w-screen-xl w-full px-4 md:px-8 mt-10 mb-44">
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 ">
              <div className=" ml-8 mt-5 ">
                <h1 className="text-[#F9A820] text-[24px] font-semibold font-secondfont">
                  Post a job
                </h1>
                <p className="text-[#355474] font-secondfont font-medium text-[16px] mt-4">
                  Hire top data talent for your company and elevate your
                  data-driven capabilities!
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="w-1/3 h-[400px] flex flex-col justify-between">
                  <FormField
                    control={form.control}
                    name="header"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <div className="flex gap-2">
                            <RiMapPinLine
                              className="text-[#355474]"
                              size={20}
                            />
                            <FormLabel className="text-[#355474] text-[16px] font-semibold font-customfont">
                              Company name
                            </FormLabel>
                          </div>
                          <FormControl>
                            <Input
                              className="bg-[#FFFFFF] border stroke-[#ECEDED] w-[320px] h-[46px] rounded-[7px]"
                              placeholder="company name..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="level"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <div className="flex gap-2">
                            <MdOutlineTableView
                              className="text-[#355474]"
                              size={20}
                            />
                            <FormLabel className="text-[#355474] text-[16px] font-semibold font-customfont">
                              Level
                            </FormLabel>
                          </div>
                          <FormControl>
                            <Input
                              className="bg-[#FFFFFF] border stroke-[#ECEDED] w-[320px] h-[46px] rounded-[7px]"
                              placeholder="Intern, Junior, Middle, Senior, Team lead..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="education"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <div className="flex gap-2">
                            <MdCastForEducation
                              className="text-[#355474]"
                              size={20}
                            />
                            <FormLabel className="text-[#355474] text-[16px] font-semibold font-customfont">
                              Education
                            </FormLabel>
                          </div>
                          <FormControl>
                            <Input
                              className="bg-[#FFFFFF] border stroke-[#ECEDED] w-[320px] h-[46px] rounded-[7px]"
                              placeholder="Higher, secondary, vocational education"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="posting_date"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <div className="flex gap-2">
                            <IoIosCalendar
                              className="text-[#355474]"
                              size={20}
                            />
                            <FormLabel className="text-[#355474] text-[16px] font-semibold font-customfont">
                              Expiration date
                            </FormLabel>
                          </div>
                          <FormControl>
                            <Input
                              className="bg-[#FFFFFF] border stroke-[#ECEDED] w-[320px] h-[46px] rounded-[7px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </>
                    )}
                  />
                </div>
                <div className="w-1/3 h-[300px]  flex flex-col justify-between">
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <div className="flex gap-2">
                            <PiSelectionBackground
                              className="text-[#355474]"
                              size={20}
                            />
                            <FormLabel className="text-[#355474] text-[16px] font-semibold font-customfont">
                              Position
                            </FormLabel>
                          </div>
                          <FormControl>
                            <Input
                              className="bg-[#FFFFFF] border stroke-[#ECEDED] w-[320px] h-[46px] rounded-[7px]"
                              placeholder="position..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="min_salary"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <div className="flex gap-2">
                            <CiDollar className="text-[#355474]" size={20} />
                            <FormLabel className="text-[#355474] text-[16px] font-semibold font-customfont">
                              Salary
                            </FormLabel>
                          </div>
                          <FormControl>
                            <Input
                              className="bg-[#FFFFFF] border stroke-[#ECEDED] w-[320px] h-[46px] rounded-[7px]"
                              placeholder="min"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email_address"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <div className="flex gap-2">
                            <MdOutlineEmail
                              className="text-[#355474]"
                              size={20}
                            />
                            <FormLabel className="text-[#355474] text-[16px] font-semibold font-customfont">
                              Email
                            </FormLabel>
                          </div>
                          <FormControl>
                            <Input
                              className="bg-[#FFFFFF] border stroke-[#ECEDED] w-[320px] h-[46px] rounded-[7px]"
                              placeholder="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </>
                    )}
                  />
                </div>
                <div className="w-1/3 h-[300px]  flex flex-col justify-between">
                  <FormField
                    control={form.control}
                    name="job_type"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <div className="flex gap-2">
                            <IoBagOutline
                              className="text-[#355474]"
                              size={20}
                            />
                            <FormLabel className="text-[#355474] text-[16px] font-semibold font-customfont">
                              Job Type
                            </FormLabel>
                          </div>
                          <FormControl>
                            <Input
                              className="bg-[#FFFFFF] border stroke-[#ECEDED] w-[320px] h-[46px] rounded-[7px]"
                              placeholder="Full time, Part time, Remote..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="max_salary"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <div className="flex gap-2">
                            <FormLabel className="text-[#355474] text-[16px] font-semibold font-customfont"></FormLabel>
                          </div>
                          <FormControl>
                            <Input
                              type="number"
                              className="bg-[#FFFFFF] border stroke-[#ECEDED] w-[320px] h-[46px] rounded-[7px] "
                              placeholder="max"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company_site_link"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <div className="flex gap-2">
                            <IoIosLink className="text-[#355474]" size={20} />
                            <FormLabel className="text-[#355474] text-[16px] font-semibold font-customfont">
                              Company website link
                            </FormLabel>
                          </div>
                          <FormControl>
                            <Input
                              className="bg-[#FFFFFF] border stroke-[#ECEDED] w-[320px] h-[46px] rounded-[7px]"
                              placeholder="link..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </>
                    )}
                  />
                </div>
              </div>
              <div className="ml-[20px] mb-24">
                <FormField
                  control={form.control}
                  name="job_description"
                  render={({ field }) => (
                    <>
                      <FormItem>
                        <div className="flex gap-2">
                          <FormLabel className="text-[#355474] text-[16px] font-semibold font-customfont">
                            {" "}
                            Job Description{" "}
                          </FormLabel>
                        </div>
                        <FormControl>
                          <Textarea
                            className="bg-[#FFFFFF] border stroke-[#ECEDED] w-[1048px] h-[200px] rounded-[7px]"
                            placeholder="input text..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </>
                  )}
                />
              </div>
              <div className="w-[1120px] flex justify-end">
                <Button className="w-full md:w-auto" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </section>
      <Toaster position="bottom-right" />
    </>
  );
};

export default Addform;
