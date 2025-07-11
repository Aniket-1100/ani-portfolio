import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const form = useRef(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_syki7hg",       // ✅ Your Service ID
        "template_pjy4s2a",      // ✅ Your correct Template ID
        form.current,
        "BSlUVlkORYP9YHheT"       // ✅ Your Public Key
      )
       
      .then(
        (result) => {
          setSent(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section className="py-20 bg-slate-900" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to collaborate on exciting projects? Feel free to reach out for opportunities, 
            discussions, or just to connect with a fellow developer!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. 
                Whether you have a project in mind or just want to say hello, don't hesitate to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <Mail className="text-blue-400" size={20} />
                <a
                  href="mailto:singhaniketpratap1100@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  singhaniketpratap1100@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <Phone className="text-blue-400" size={20} />
                <a
                  href="tel:+918738951100"
                  className="hover:text-white transition-colors"
                >
                  +91 8738951100
                </a>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <Linkedin className="text-blue-400" size={20} />
                <a
                  href="https://www.linkedin.com/in/aniket-pratap-singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Aniket Pratap Singh
                </a>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <Github className="text-blue-400" size={20} />
                <a
                  href="https://github.com/Aniket-1100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Aniket-1100
                </a>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-3">Currently Open To:</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Full-stack development opportunities
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Internship and entry-level positions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Open source collaborations
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Technical discussions and mentoring
                </li>
              </ul>
            </div>
          </div>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                />
                <Input
                  type="text"
                  name="title"
                  placeholder="Subject"
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 resize-none"
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {loading ? "Sending..." : sent ? "Message Sent!" : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
