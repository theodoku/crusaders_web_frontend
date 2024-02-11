import React from 'react';
import ProductLogo from '../assets/PTY Logo.jpeg';
import FamilyLogo from '../assets/family.jpeg';
import BabyLogo from '../assets/baby.jpeg';
import RetiredLogo from '../assets/aged.jpeg';

const OurProducts = () => (
  <section className="product-section bg-gray-100 py-8">
    <div className="product-wrapper container mx-auto px-4">
      <div className="product mt-20 flex items-center justify-center">
        <div className="productlogo mr-4">
          <img src={ProductLogo} alt="Logo" className="product-logo w-20 h-20" />
        </div>
        <h2 className="product-title text-2xl font-bold text-center mt-4">BUY TERM AND INVEST IN MUTUAL FUNDS</h2>
      </div>
      <div className="product-term mb-8">
        <h3 className="product-summary text-2xl font-semibold mb-4">
          Our Buy Term and Invest in Mutual Funds offers families
          Adequate Protection at Affordable prices
        </h3>
        <div className="family-logo">
          <img src={FamilyLogo} alt="logo" className="family-pic w-full" />
        </div>
        <p className="product-info text-3xl-gray-700 mt-4">
          First Africa Life Buy Term and Invest In Mutual Funds is a Term Insurance Product that
          ensures replacement of the breadwinner&apos;s income in the event of premature death
          occuring within the policy period.
          This policy provides families with a unique opportunity to have a separate investment
          with an investment company aimed at a comfortable retirement.
          This underpins our philosophy that at the early years of life,
          one would need adequate insurance protection, because when the unfortunate
          happens any investment at that point will not be adequate to provide support to
          the dependants.
        </p>
      </div>
      <div className="product-family mb-8">
        <h3 className="product-baby text-2xl font-semibold mb-4">
          Your family is important Let us protect you
          So you can protect them
        </h3>
        <div className="baby-logo">
          <img src={BabyLogo} alt="logo" className="kids-pic w-full" />
        </div>
        <p className="retired text-3xl-gray-700 mb-4">
          When you are older you usually have fewer dependants and less financial responsibilities.
          At this point your need for life insurance should have reduced dramatically since you have
          accumulated funds to see you through retirement years
        </p>
        <div className="retired-logo">
          <img src={RetiredLogo} alt="logo" className="old-pic w-full" />
        </div>
        <h3 className="retired-old text-xl font-semibold mb-4">
          Your retirement should be comfortable .....
        </h3>
        <p className="retied-para text-3xl-gray-700">
          Buy Term and Invest in Mutual Funds, ensures that at the early years of Life
          you are adequately protected while during your pension age your investment
          must provide a regular income to ensure a comfortable retirement.
          Hence buy only term life insurance for protection and invest in mutual funds for your
          financial needs and retirement.
        </p>
      </div>
      <div className="bottom-footer flex items-center justify-center py-4 bg-gray-200">
        <span className="text-sm font-bold">
          &copy;
          <small>Team Crusaders First Africa Life PTY</small>
        </span>
      </div>
    </div>
  </section>
);

export default OurProducts;
