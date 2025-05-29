import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneSquareAlt } from "react-icons/fa";

export const teachers = [
    {
      name: 'الأستاذة',
      surname: 'أ. كريمة',
      description: 'أكثر من 18 سنة من التجربة في الإشراف على الأطفال والمراهقين، حاصلة على ماجستير في التربية الإسلامية، حاصلة على شهادة في التربية العاطفية والسلوكية، معلمة في السلك الثانوي، شغوفة بتعليم الأطفال اللغة العربية والقرآن الكريم، تحب العمل مع الأطفال الصغار ومساعدتهم على فهم القرآن الكريم.',
    },
    {
      name: 'الأستاذ',
      surname: 'أ. رشيد',
      description: 'حاصل على شهادة في التربية الإسلامية، يمتلك خبرة تزيد عن 15 سنة في تدريس القرآن الكريم والتربية الإسلامية، معلم في السلك الإعدادي، يحب العمل مع الأطفال وتعليمهم أساسيات الدين الإسلامي.',
    },
    {
      name: 'أستاذ',
      surname: 'أ. عادل',
      description: 'حاصل على ماجستير في التربية الإسلامية من EDP الجامعة الإسلامية، معلم في السلك الثانوي، يمتلك خبرة في تدريس القرآن الكريم والتربية الإسلامية.',
    },
    {
      name: 'الأستاذة',
      surname: 'أ. فاطمة',
      description: 'حاصلة على ماجستير في التربية الإسلامية من جامعة القرويين، معلمة في السلك الثانوي، تمتلك خبرة تزيد عن 12 سنة في تدريس القرآن الكريم والتربية الإسلامية.',
    },
    {
      name: 'أستاذة',
      surname: 'أ. نسيمة',
      description: 'حاصلة على ماجستير في علم الاجتماع من جامعة ابن زهر، معلمة في السلك الثانوي، تمتلك خبرة تزيد عن 11 سنة في تدريس التربية الإسلامية، شغوفة بتعليم الأطفال القيم الإسلامية ومساعدتهم على فهم الدين الإسلامي.',
    },
  ];
  export const comments = [
     { id: 1, username: "َAhmed", comment: "منصة رائعة" },
  { id: 2, username: "ليلى", comment: "لقد استفدت الكثير" },
  { id: 3, username: "wail", comment: "شيء رائع" },
  { id: 4, username: "سارة", comment: "محتوى مفيدdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss ومنظم" },
  { id: 5, username: "ياسر", comment: "شكراً لكم على هذا الجهد" },
  ]
  export  const services = [
    { id: 1, title: 'Web Development', description: 'Custom web applications built with modern technologies', icon: '🟡' ,img:'/ph/cour1.jpg',level :'Medium' },
    { id: 2, title: 'Mobile Development', description: 'Native and cross-platform mobile applications', icon: '🟢',img:'/ph/cour1.jpg' , level :'Beginner' },
    { id: 3, title: 'Cloud Solutions', description: 'Scalable cloud infrastructure and deployment', icon: '🔴' ,img :'/ph/cour1.jpg',level :'Advanced'},
    { id: 4, title: 'Consulting', description: 'Technical consulting and architecture planning', icon: '🟢',img :'/ph/cour1.jpg' , level : 'Beginner'},
  ];
  export const contacts = [
    {
      icon :<FaFacebook color="blue"/> ,link:'https://www.facebook.com/houssem.bz.92/'
    },
     {
      icon :<SiGmail color="red"/> ,link:'mailto:kaidohoussem@gmail.com'
    },{
      icon : <FaPhoneSquareAlt color="green"/> , link:'https://wa.me/213796748570'
    }
  ]