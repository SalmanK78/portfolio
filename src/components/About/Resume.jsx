import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import pdf from '../../assets/Resume/Resume.pdf'

const Resume =()=> {
    const tabsData = [
        {
          label: "INFORMATION --- 01",
          content:<PersonalInfo></PersonalInfo>
        },
        {
          label: "SKILLS --- 02",
          content:<Skills></Skills>
        },
        {
          label: "EDUCATION --- 03",
          content:
            "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
        },

      ];
      
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-3 mt-10">
      <div className="px-2">
      <div className="tab-head flex flex-col md:flex-row md:gap-2 md:bg-[#012B45] gap-5 justify-between w-full md:h-20 text-white px-3 py-3 md:border border-gray-600 rounded-full md:max-w-4xl max-w-lg mx-auto relative z-20 text-lg">
        {/* Loop through tab data and render button for each. */}
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-5 md:p-0 rounded-full font-bold hover:bg-[#FF014F] w-full transition-w duration-500 ${
                idx === activeTabIndex
                  ? "bg-[#FF014F]"
                  : "bg-[#00000081] md:bg-[transparent] hover:border-gray-200"
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}>
              {tab.label}
            </button>
          );
        })}
      </div>
      </div>
      {/* Show active tab content. */}
      <div className="md:pt-20 py-5 text-white border border-gray-700 bg-[#001b3b3b] md:-translate-y-10 w-full z-10 relative">
        <p>{tabsData[activeTabIndex].content}</p>
      <a href="https://doc-04-a0-docs.googleusercontent.com/docs/securesc/nskumtdq9innn8ds41q8t8srf95lpech/8jv1r4mac3v5jlbfen7n5105rvro7oni/1688189700000/06204906340227491218/07885354470216867707/1Abs0VGbr20JHuf1erbKd1_wDtDn192OT?e=download&ax=AGtFMPW4Yzvx0Qmct-cfBVf8cUhcp-IVZFhNtAUIfCx371JyR9Brg7J7pNEoYGi-WSwEPpVLp7BaIY37R3S1d77YX9wrtv-bPAm7GoHraMek_KNVIfjkRrajYM4n5h8Q00XeT6zZc7u5qapX62QB2q_e2wMFo0vPEOhQrosEL_fEn8s_bqiY1q71S5TrWkRdeROpMVnPNDBufW-E5z5lcqj9W3iwDs1oTTOQjjhFypJfIevHjSd3XynwXKS8T4nVOhQGnBGnKwfRfpq_cgHN166j1pyKog45_TL7n1Ziqao5uEufq4qcCXSi6EP7-aNBhsRb84_BCNle7PkBELLdC_6KQJKEMhpkF1nRAnAaceQ7revFW3FVpQFcIfvsOOfZ6Onvsi5AWaszxRQDS_CloqvOF4UYzsiQJWS0wFeu4zUZocwwR9OMXfkwbI_JVjgDdr4fmZ1nDjFwRv_Kqxjcq0_c8W-FeOsjekMsbEPZNR6y6PvAJ3I6sZ4F0AzmE8oT4qf0bm8KCZhJKyAmYaYANQMDUQHg2V3F8unyzOAAtwvcu0oETGSJw26t5m734uzPVW4ovCB2AI2hri6UaxJ4xXuzo-LIwTNCP5vguObwf97nqN5S2DIDHH0BhLMGN_qFe_Nyg6wpR8eAEkUAMMF-zq2xT5c13O8Pue6a_jHXfZMjrQpJxgt8nKBCoi2X3SNHhaMLhBoi2okXGSZl-reANPvzieybNvOSsWLMAlJzVkJyuWtlB6RLBTNr9VvQ7XIViFpRbVBI8yq34zk-QFvVKiN7ZtaVgl7c8SExMvxY8ldAkX69dC_JP_6vJkjINRJCeU_fO1MvUcwgxfcBskHzFQxQe9YXo0_UUQpHOjx9yUiDLKWrKrAhvOfYg6qhhidgxoONybt28SeDQD5xCjScmYh8nAnr2XcxAMocqX0&uuid=73f5c614-099e-405c-9fbb-c805e4188657&authuser=0&nonce=86v2m9kda14tq&user=07885354470216867707&hash=ub185tdv2a0rq805236242psaurekr7p">
      </a>
      </div>
        <div className="text-center">
        <button className=" md:-translate-y-10 text-white py-2 px-4 border border-gray-500 mt-5 rounded-full text-lg font-bold bg-[#FF014F]"><a href="https://drive.google.com/u/0/uc?id=1Abs0VGbr20JHuf1erbKd1_wDtDn192OT&export=download">Download Resume</a></button>
        </div>
    </div>
  );
}
export default Resume;