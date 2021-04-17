import React from 'react'
import {Image, ScrollView} from 'react-native'
import {Divider, Paragraph, Title} from 'react-native-paper'

class AboutScreen extends React.Component {
  state = {}
  render() {
    return (
      <ScrollView>
        <Image
          style={{
            marginTop: 0,
            height: 150,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
          source={{
            uri:
              'https://drive.google.com/uc?export=view&id=1BqxmgbP689mK_Ibtc7ZrJjNQYqy49l4h',
          }}
        />
        <Title
          style={{
            textAlign: 'center',
            fontSize: 23,
            fontFamily: 'Cairo-Regular',
            marginTop: 25,
            marginBottom: 15,
          }}>
          الطبخ الجزائري
        </Title>
        <Divider />
        <Paragraph
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontFamily: 'Cairo-Regular',
            lineHeight: 30,
            padding: 10,
            marginVertical: 10,
          }}>
          يتميز الطبخ الجزائري بثروة مستمدة من الإنتاج البري والبحري، وهو مطبخ
          متوسطي وشمال أفريقي قائم على المطبخ العربي والأمازيغي والتركي
          والفرنسي.[1][2][3] يقدم مجموعة متنوعة من الأطباق اعتمادا على المنطقة
          والموسم، والتي تعطي لوحة مطبخية متنوعة جدا. هذا المطبخ الذي يستخدم
          العديد من المنتجات، لا يزال قائما على الخضروات والحبوب التي كانت دائما
          تنتج في وفرة في البلاد، والتي كانت تسمى سابقا « مخبز روما » ثم «مخبز
          أوروبا». وبالإضافة إلى ذلك، ساهم تاريخ الجزائر الغني في توفير وفرة من
          الأغذية من فترات ومناطق مختلفة من العالم. في الواقع، كانت الفتوحات أو
          النزوح الديموغرافي نحو الأراضي الجزائرية أحد العوامل الرئيسية للتبادل
          بين الشعوب المختلفة (الأمازيغ والعرب والأتراك والأندلس والفرنسيين
          والإسبان). من بين جميع التخصصات المطبخية المتاحة في الجزائر، يبقى
          الكسكس النوميدي الأكثر شهرة، والمعترف به كطبق وطني، فضلا عن المعجنات
          التقليدية والمسماة « المعجنات الشرقية » في الدول الغربية. على الرغم من
          انتقالها شفهيا تاريخيا، من جيل إلى جيل، وهناك الكثير والكثير من الكتب
          المكرسة للمطبخ الجزائري. يجمع المطبخ الجزائري بين مجموعة متنوعة من
          المكونات بين الخضار والفواكه والتوابل واللحوم والأسماك والمأكولات
          البحرية والخضروات والفواكه المجففة. وغالبا ما تستخدم الخضار للسلطات
          والحساء والطاجين والكسكس والأطباق بالمرق. يستعمل كثيرا الجزر والقرع
          والبطاطا والفاصوليا الخضراء والفاصوليا واللفت، الباذنجان، البسباس،
          القرنون، ترفاس...
        </Paragraph>
        <Paragraph
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontFamily: 'Cairo-Regular',
            lineHeight: 30,
            padding: 10,
            marginVertical: 10,
          }}>
          من ويكيبيديا، الموسوعة الحرة
        </Paragraph>
      </ScrollView>
    )
  }
}

export default AboutScreen
