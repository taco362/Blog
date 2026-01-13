import React from 'react';
import { timelines } from '@/_datas/timeline_data';

export default function TimelineSection() {
  return (
    <section className="bg-black text-white py-32 px-6 md:px-0">
      <div className="mx-auto" style={{ maxWidth: '1232px' }}>
        <h2 className="text-white text-3xl font-thin leading-tight mb-16">
          Professional Timeline
        </h2>

        {/* 타임라인 전체 */}
        <div style={{ position: 'relative', width: '100%' }}>
          
          {/* 중앙 수직선 */}
          <div className="absolute z-0 "
            style={{
              top: '25px',                
              bottom: 0,                  
              left: '50%', 
              width: '2px',               
              backgroundColor: '#2c2c2c', 
              transform: 'translateX(-50%)',
            }}
          ></div>

           <div className="flex flex-col gap-15">
            {timelines.map((item, index) => {
              const isRight = index % 2 === 0; 

              return (
                <div 
                  key={index} 
                  className="flex w-full items-center relative"
                  style={{ justifyContent: isRight ? 'flex-end' : 'flex-start'}}>
                  
                  {/* 중앙 점 */}
                  <div className="absolute bg-white rounded-full z-10"
                     style={{
                      top: '12px',
                       left: '50%',
                       width: '16px',           
                       height: '16px',           
                       transform: 'translateX(-50%)',
                     }}
                  ></div>

                  {/* 컨텐츠 박스 */}
                  <div className="flex flex-col z-20"
                    style={{
                      width: '45%',
                      alignItems: isRight ? 'flex-end' : 'flex-start',
                      textAlign: isRight ? 'right' : 'left'
                    }}
                  >
                    <span className="text-white text-base block mb-2">
                      {item.year}
                    </span>
                    
                    {/* 설명글 박스 */}
                    <div className="w-full bg-black border border-white"
                      style={{
                        borderRadius: '12px',                      
                        padding: '16px 24px',    
                        textAlign: 'left' 
                      }}
                    >
                      <p className="text-white text-lg font-thin leading-tight break-keep m-0">
                        {item.detail}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}