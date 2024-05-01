import InfoPoint from '@/components/InfoPoint/InfoPoint';
import styles from './FaqSection.module.scss';

const FaqSection = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h4 className={`${''} headingH4 uppercase`}>
          Got Questions? <br /> I&rsquo;ve got Answers!
        </h4>
        <p className={`${''} textS`}>
          Browse my FAQs! Here, you&rsquo;ll get simple answers for all sorts of questions, covering everything before
          and after your wedding. Can&rsquo;t find your question? Just shoot me a message. Let&rsquo;s tackle any
          uncertainties and start getting pumped for your wedding!
        </p>
      </div>
      <div className={styles.infoGrid}>
        <InfoPoint title="Do you travel for weddings and elopements?">
          YES! I love hopping on a plane to capture your love stories, no matter where they are. Beach, mountain, city –
          you name it, I&#39;m there. So, if you&#39;re planning to say &quot;I do&quot; somewhere special, let&#39;s
          make it happen.
        </InfoPoint>
        <InfoPoint title="How far in advance should we book you?">
          It&#39;s common for couples to secure their spot with me over a year ahead, though I do get last-minute
          inquiries too. The sooner you reach out, the more likely your date is still open. Drop me a line once
          you&#39;ve got your date, and I&#39;ll take it from there!
        </InfoPoint>
        <InfoPoint title="Can we get albums and prints through you?">
          Absolutely! There’s something special about holding your photos in your hands. I offer a variety of album
          options and prints. Feel free to drop me an email for all the details. You can choose your perfect album type
          even after the wedding day has passed.
        </InfoPoint>
        <InfoPoint title="Can we customize our package?">
          Definitely! I&#39;m all about flexibility. Along with tailoring your package to fit perfectly, you can also
          purchase additional hours to ensure every moment of your day is captured. Let&#39;s make sure everything is
          just right for you.
        </InfoPoint>
        <InfoPoint title="Do you also edit photos in black and white?">
          Absolutely! Black and white photos offer a timeless, classic look that brings out the emotions of your special
          moments in a way that color photos sometimes can&#39;t. While color captures the vibrancy and mood of your
          day. It&#39;s all about the balance of storytelling, and I love providing a mix of both to beautifully
          document your day.
        </InfoPoint>
        <InfoPoint title="How do we get our photos?">
          You&#39;ll receive a password-protected online gallery with all your edited, high-resolution images. From this
          secure space, You can download, share, and even choose your favorites to print.
        </InfoPoint>
      </div>
    </div>
  );
};

export default FaqSection;
