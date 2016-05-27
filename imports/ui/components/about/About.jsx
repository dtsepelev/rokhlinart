/* eslint max-len: 0 */

import React, { Component } from 'react'
import classNames from 'classnames'
import RetinaImage from 'react-retina-image'

import { styles } from './about.mss'
import { Text } from '../text/Text.jsx'

const classes = {
  image: classNames(styles.image, 'img-responsive'),
  imagesTop: classNames(styles.imagesTop, 'col-lg-3', 'visible-lg-block'),
  imagesBottom: classNames(styles.imagesBottom, 'hidden-lg'),
  firstLine: 'firstLine',
  imageWrapper: classNames('col-sm-6', 'col-xs-12', 'col-lg-12'),
  bio: classNames('col-lg-offset-3', 'col-lg-6'),
}

const description = 'Родился Александр в 1954 году в семье театрального художника Моисея Айзиковича Рохлина и детского врача Софьи Адольфовны Лифшиц в городе Орле. Он и его младший брат Владимир рано начали рисовать. Сначала их обучал отец, потом замечательный учитель Владимир Николаевич Воропаев в студии Дворца пионеров, а его жена, Валентина Николаевна, учила этих ребят рисовать в 22-ой школе. Параллельно была художественная школа №1 (потому что была единственной) с молодыми выпускниками худграфа, но очень серьезными учителями. Все было там по полной: живопись, рисунок, скульптура, история искусств. Директором работала Галина Александровна Орехова, строго учила рисовать Валентина Васильевна Юделевич, а живописи обучал прекрасный акварелист Эдуард Игнатьевич Галактионов, его жена Маргарита Михайловна показывала слайды по истории искусств. Забегая вперед надо сказать, что с учителями мальчику везло всегда (и с женщинами, но об этом не здесь).\nПосле 22-ой орловской школы юноша учился в Орловском педагогическом университете на графическом факультете у знающих и добросовестных орловских художников. Правда, начерталка, сопромат и другие антихудожественные предметы утомляли. Но поддерживал декан, друг и отец творческой и в меру пьющей молодежи Георгий Васильевич Дышленко.\nПотом юноша с удовольствием оформлял спектакли и театрализованные концерты вместе с родным отцом в родном городе. В 1976 году поступил в Художественно-промышленную академию им. барона Штиглица в Петербурге, тогда Муха. В Мухе преподавали талантливые, высоко образованные и честные художники: Владимир Федорович Марков, Нина Степановна Кочнева, Станислав Петрович Мосевич, Людмила Афанасьевна Сергеева, Ярослав Яковлевич Лаврентьев, Ольга Александровна Некрасова-Каратеева и многие другие. Времена были еще не вегетарианские, а учителя – все больше «формалисты», т.е. мастера. Там Александр получил специализацию по монументальной и декоративной керамике и стеклу.\nРаботал дизайнером на стекольном заводе в Башкирском Салавате, зеркальной фабрике в Петербурге, на стройфарфоровом заводе в Купчино, стал членом Союза художников России, делал керамические панно и скульптуры для общественных зданий Урала, Башкирии, Петербурга, Выборга, Пикалево. Там же, в Петербурге, любил прекрасных женщин и родил сыновей Захара и Филиппа.\nС 1982 года продолжил художественное образование изучением искусства великих мастеров прошлого. Четыре года копировал картины в Эрмитаже и репродукции дома у великого Григория Яковлевича Длугача. Учитель продолжал и развивал традиции русской аналитической школы, сочетая методы авангарда XX века и глубокое проникновение в структуру картин старых мастеров. Его ученики образовали так называемую Эрмитажную школу. В 1998 году в Эрмитаже прошла большая выставка их картин по мотивам произведений старых мастеров.\nС начала девяностых годов у Александра занятия искусством шли параллельно с изучением ТАНАХА в Петербургской ешиве. Тогда у него появилось еврейское имя Ицхак-Айзик Александр бен Мойше. Несколько месяцев он поучился на курсах «Мельтон» в Иерусалимском Университете, где преподавал цвет русской еврейской мудрости из легендарных «отказников».\n Петербургские художники в это же время создали небольшую группу «Пагишот» («Встречи»). На встречах группы проводились занятия по Торе, во время которых художники делали лехаим, а вовсе не пошло бухали. Танахические знания, которые в них в это время вливались, позднее вылились в картины и скульптуры, на основе которых Рохлин сделал книгу «Сотворение и творчество».\nАлександр всегда любил книжную графику. Иногда ему удавалось иллюстрировать издания, посвященные идишской музыке, например «Идишские песни в обработке Нехамы Лифшицайте», книга о творчестве певца Микаэля Эпельбаума и сборники песен к еврейским праздникам, к поэзии, например «Буквоцвет» Аврома Суцкевера. Тут ему довелось сотрудничать со знатоками идишской культуры и ценителями книжного дела Александром Френкелем и композитором Евгением Хазданом. Большие станковые иллюстрации художник сделал к «Бейт дин моего отца» и «Тойбеле и ее демон» Башевиса Зингера. Еще на Орловском худграфе под руководством мастера Михаила Семеновича Хабленко начал рисовать иллюстрации к «Одесским рассказам» Бабеля и долго не прекращал.\nРохлин внимательно изучал еврейские изображения на древних рукописях, старинных синагогах и мацевах кладбищ заброшенных еврейских местечек. Он сотрудничал с педагогической организацией «Новая еврейская школа» и оформлял журнал с этим названием. На семинарах этой организации он работал с учителями рисования и традиции из других городов и стран, там увидел, что его опыт может помочь им в практической работе. Обобщив этот опыт, он составил цикл занятий для людей разных возрастов и образования. Он сделал книжки «Мидраш-картина» и «Синагога открытая, для всех». А в них описал свой опыт преподавания искусства в школе в интеграции с изучением Торы.\nПоучившись у отличных учителей, Александр передавал усвоенное своим ученикам. Он разбирал тексты Танаха и преподавал рисование маленьким, средним и большим детям, студентам, зрелым людям и старикам.\nВ оставшееся время художник писал, в основном, этюды и картины: это пейзажи Питера, Иерусалима, Орла, Праги, Одессы, натюрморты из обиходных предметов и портреты людей разных возрастов, национальностей и профессий. Ему это всегда было очень интересно.'

export class About extends Component {
  componentDidMount() {
    document.title = `${Meteor.settings.public.title} - О художнике`
  }

  render() {
    return (
      <div>
        <div className={classes.imagesTop}>
          <div>
            <RetinaImage
              src='/images/am1.jpg'
              role='presentation'
              className={classes.image}
            />
          </div>
          <div>
            <RetinaImage
              src='/images/am2.jpg'
              role='presentation'
              className={classes.image}
            />
          </div>
        </div>
        <div className={classes.bio}>
          <Text description={description} />
        </div>
        <div className={classes.imagesBottom}>
          <div className={classes.imageWrapper}>
            <RetinaImage
              src='/images/am1.jpg'
              role='presentation'
              className={classes.image}
            />
          </div>
          <div className={classes.imageWrapper}>
            <RetinaImage
              src='/images/am2.jpg'
              role='presentation'
              className={classes.image}
            />
          </div>
        </div>
      </div>
    )
  }
}