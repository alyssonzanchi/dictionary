export interface WordProps {
  palavra: {
    id: number;
    titulo: string;
    traducao: string;
    significado: string;
    frase1: string;
    frase2: string;
    imagem: string;
    audio: string;
  };
}

export const palavras = [
  {
    id: 1,
    titulo: 'Astounding',
    traducao: 'Surpreendente, impressionante.',
    significado:
      'Causing astonishment or amazement; extremely impressive or daunting.',
    frase1:
      "The magician's performance was truly astounding; the audience was left speechless.",
    frase2:
      'Her knowledge of the subject was astounding; she seemed to know everything about it.',
    imagem: '/assets/images/astounding.jpg',
    audio: '/assets/songs/astounding.mp3'
  },
  {
    id: 2,
    titulo: 'Whizz',
    traducao: 'Zumbido, zunido; especialista, mestre.',
    significado:
      '"Whizz" can describe a sharp, rapid sound, like that of something moving or vibrating. Additionally, it\'s informally used to describe someone highly skilled in a specific area.',
    frase1:
      'The whizz of the bicycle wheels cut through the silence of the night.',
    frase2: "He's a real whizz at math; he solved the problem in seconds.",
    imagem: '/assets/images/whizz.png',
    audio: '/assets/songs/whizz.mp3'
  },
  {
    id: 3,
    titulo: 'Canopy',
    traducao: 'Dossel, cobertura, copa (de árvores).',
    significado:
      'A covering, usually of fabric, supported on poles or suspended above a bed, throne, or other area. In a forest, it refers to the upper layer of trees and branches.',
    frase1:
      'The dense canopy of the rainforest blocks much of the sunlight from reaching the forest floor.',
    frase2:
      'They set up a canopy over the picnic area to provide shade and shelter from the sun.',
    imagem: '/assets/images/canopy.png',
    audio: '/assets/songs/canopy.mp3'
  },
  {
    id: 4,
    titulo: 'Hoofprints',
    traducao: 'Pegadas de cascos.',
    significado:
      'The marks or impressions left on the ground by the hooves of an animal, such as a horse or deer.',
    frase1:
      'The soft earth was covered in hoofprints, evidence that a herd of deer had passed through recently.',
    frase2:
      'As they followed the trail, the hoofprints became fresher, indicating they were getting closer to the wild horses.',
    imagem: '/assets/images/hoofprints.jpg',
    audio: '/assets/songs/hoofprints.mp3'
  },
  {
    id: 5,
    titulo: 'Thaw',
    traducao: 'Degelo, descongelamento.',
    significado:
      'The process of ice, snow, or frozen ground becoming liquid or soft as a result of warming temperatures.',
    frase1:
      'After weeks of freezing temperatures, the thaw finally began, and the ice on the lake started to melt.',
    frase2:
      'The thawing of the permafrost in the Arctic has significant implications for climate change.',
    imagem: '/assets/images/thaw.jpg',
    audio: '/assets/songs/thaw.mp3'
  },
  {
    id: 6,
    titulo: 'Hurdles',
    traducao: 'Obstáculos, barreiras.',
    significado:
      'Barriers or obstacles that must be overcome, either literally (as in a race where runners jump over hurdles) or figuratively (as in challenges or difficulties).',
    frase1:
      'She faced many hurdles on her path to success, but she never gave up.',
    frase2:
      'Overcoming language barriers was just one of the hurdles they encountered when moving to a new country.',
    imagem: '/assets/images/hurdles.jpg',
    audio: '/assets/songs/hurdles.mp3'
  },
  {
    id: 7,
    titulo: 'Tiny',
    traducao: 'Minúsculo, pequeno.',
    significado: 'Extremely small in size.',
    frase1:
      'The tiny kitten curled up in the palm of her hand, looking incredibly delicate and cute.',
    frase2:
      'Despite its tiny size, the new microchip is incredibly powerful and efficient.',
    imagem: '/assets/images/tiny.jpeg',
    audio: '/assets/songs/tiny.mp3'
  },
  {
    id: 8,
    titulo: 'Lifting',
    traducao: 'Levantamento, elevação.',
    significado:
      'The action of raising something to a higher position or level.',
    frase1:
      'She felt a sense of accomplishment after lifting the heavy weights at the gym.',
    frase2:
      'The fog was slowly lifting, revealing the beautiful landscape hidden beneath it.',
    imagem: '/assets/images/lifting.jpg',
    audio: '/assets/songs/lifting.mp3'
  },
  {
    id: 9,
    titulo: 'Appalled',
    traducao: 'Chocado, horrorizado.',
    significado: 'Greatly dismayed or horrified.',
    frase1:
      'She was appalled by the news of the devastating earthquake and its aftermath.',
    frase2:
      "The teacher was appalled by the students' lack of respect during the assembly.",
    imagem: '/assets/images/appalled.jpeg',
    audio: '/assets/songs/appalled.mp3'
  },
  {
    id: 10,
    titulo: 'Struggling',
    traducao: 'Lutando, enfrentando dificuldades.',
    significado:
      'Making forceful or violent efforts to get free of restraint or constriction; striving to achieve or attain something in the face of difficulty or resistance.',
    frase1:
      'He has been struggling to find a job since he graduated from college.',
    frase2:
      'The small business is struggling to stay afloat in the competitive market.',
    imagem: '/assets/images/struggling.jpg',
    audio: '/assets/songs/struggling.mp3'
  },
  {
    id: 11,
    titulo: 'Courteous',
    traducao: 'Cortês, educado.',
    significado: 'Polite, respectful, or considerate in manner.',
    frase1:
      'The hotel staff were very courteous, making sure all guests felt welcome and comfortable.',
    frase2:
      'Even though they disagreed on the issue, their discussion remained courteous and respectful.',
    imagem: '/assets/images/courteous.png',
    audio: '/assets/songs/courteous.mp3'
  },
  {
    id: 12,
    titulo: 'Belief',
    traducao: 'Crença.',
    significado:
      'An acceptance that something exists or is true, especially one without proof; trust, faith, or confidence in someone or something.',
    frase1:
      'Her belief in the goodness of people remained unshaken despite the hardships she faced.',
    frase2:
      "The team's belief in their ability to win the championship was evident in their confident play.",
    imagem: '/assets/images/belief.jpg',
    audio: '/assets/songs/belief.mp3'
  },
  {
    id: 13,
    titulo: 'Mankind',
    traducao: 'Humanidade.',
    significado: 'Human beings collectively; the human race.',
    frase1:
      'Throughout history, mankind has made incredible advancements in science and technology.',
    frase2:
      'The future of mankind depends on our ability to address global challenges such as climate change.',
    imagem: '/assets/images/mankind.jpg',
    audio: '/assets/songs/mankind.mp3'
  },
  {
    id: 14,
    titulo: 'Injured',
    traducao: 'Ferido, machucado.',
    significado: 'Physically harmed or hurt.',
    frase1:
      'The athlete was injured during the game and had to be taken to the hospital.',
    frase2:
      'Several passengers were injured in the car accident and required medical attention.',
    imagem: '/assets/images/injured.jpg',
    audio: '/assets/songs/injured.mp3'
  },
  {
    id: 15,
    titulo: 'Toll',
    traducao: 'Pedágio, custo, preço.',
    significado:
      'A charge payable for permission to use a particular bridge, road, or tunnel; a cost or fee exacted or demanded.',
    frase1: 'The toll for crossing the bridge has increased this year.',
    frase2: "The pandemic has taken a toll on people's mental health.",
    imagem: '/assets/images/toll.jpg',
    audio: '/assets/songs/toll.mp3'
  },
  {
    id: 16,
    titulo: 'Debris',
    traducao: 'Detritos, destroços.',
    significado: 'Scattered pieces of waste or remains.',
    frase1:
      'After the explosion, debris littered the streets, making it difficult for emergency vehicles to pass.',
    frase2:
      'The hurricane left a trail of destruction, with debris scattered everywhere.',
    imagem: '/assets/images/debris.jpg',
    audio: '/assets/songs/debris.mp3'
  },
  {
    id: 17,
    titulo: 'Lorries',
    traducao: 'Caminhões, caminhões de carga.',
    significado:
      'Large vehicles used for transporting goods; trucks or freight trucks.',
    frase1:
      'The lorries were lined up at the warehouse, ready to be loaded with cargo.',
    frase2:
      'The accident on the highway involved several lorries, causing a traffic jam.',
    imagem: '/assets/images/lorries.jpg',
    audio: '/assets/songs/lorries.mp3'
  },
  {
    id: 18,
    titulo: 'Vowing',
    traducao: 'Jurando, prometendo.',
    significado: 'Making a solemn promise or commitment.',
    frase1: 'After the accident, he was vowing to never drink and drive again.',
    frase2:
      'She stood before her friends and family, vowing to love and cherish her partner forever.',
    imagem: '/assets/images/vowing.jpg',
    audio: '/assets/songs/vowing.mp3'
  },
  {
    id: 19,
    titulo: 'Courtroom',
    traducao: 'Tribunal, sala de tribunal.',
    significado:
      'A room in which a law court sits; a room where legal proceedings take place.',
    frase1:
      'The defendant nervously waited for their case to be called in the courtroom.',
    frase2: 'The judge entered the courtroom and the proceedings began.',
    imagem: '/assets/images/courtroom.jpg',
    audio: '/assets/songs/courtroom.mp3'
  },
  {
    id: 20,
    titulo: 'Brimming',
    traducao: 'Transbordante, transbordando.',
    significado:
      'Filled or overflowing with something, often an emotion or quality.',
    frase1:
      'Her eyes were brimming with tears as she listened to the emotional speech.',
    frase2:
      'The lake was brimming with fish, making it a popular spot for fishing.',
    imagem: '/assets/images/brimming.png',
    audio: '/assets/songs/brimming.mp3'
  }
];
