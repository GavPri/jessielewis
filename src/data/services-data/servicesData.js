import { FaUser, FaUsers, FaMicrophone } from "react-icons/fa";
const servicesData = {
  services: [
    {
      serviceName: "1 on 1 mental coaching",
      shortServiceIntro:
        "Personalized coaching sessions tailored to enhance your mental performance.",
      serviceDescription:
        "My philosophy of practice involves establishing a strong working alliance through client-centered sessions and an emphasis placed on building self-confidence and mindfulness-based skills.  My goal is to empower individuals with skills to self-regulate, manage stress and emotions, and cultivate self-confidence, which will translate both on and off the court or field. I believe in the versatility of mental performance tools extending beyond sports, aiming to equip individuals with the means to excel in all facets of their lives.  Through a collaborative approach, I tailor each session to address the personalized needs of each athlete, focusing on specific mental skills through psychoeducation and exercises.",
      servicesIcon: <FaUser />,
    },
    {
      serviceName: "For teams and organizations",
      shortServiceIntro:
        "Tailored programs for teams and organizations to optimize collective mental performance.",
      serviceDescription:
        "My philosophy of practice involves establishing a strong working alliance through client-centered sessions and an emphasis placed on building self-confidence and mindfulness-based skills.  My goal is to empower individuals with skills to self-regulate, manage stress and emotions, and cultivate self-confidence, which will translate both on and off the court or field. I believe in the versatility of mental performance tools extending beyond sports, aiming to equip individuals with the means to excel in all facets of their lives.  Through a collaborative approach, I tailor each session to address the personalized needs of each athlete, focusing on specific mental skills through psychoeducation and exercises.",
      servicesIcon: <FaUsers />,
    },
    {
      serviceName: "Speaking engagements",
      shortServiceIntro:
        "Engaging talks and presentations on mental performance for events and conferences.",
      serviceDescription:
        "I offer speaking engagements for schools and sports clubs to educate larger audiences about the concept of mental performance and its potential to enhance performance in all aspects of life.  I strongly believe that mental performance techniques are not limited to sport settings but are applicable across different performance contexts.  These speaking engagements follow a similar format to team sessions, albeit with a broader focus on explaining the essence of mental performance and the significance of addressing the mental aspect of performance.  For further details on speaking engagements, please feel free to reach out to me via email.",
      servicesIcon: <FaMicrophone />,
    },
  ],
};

export default servicesData;
