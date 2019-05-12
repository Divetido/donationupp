var widgets = {
  index () {
    return {

      method: 'GET',
      url: 'widgets/',
      response: [
        {
          title: 'Последнее сообщение',
          collapseItem: [
            { active: true, count: 20, animation: 'Бегущая строка' },
            { active: false, count: 20, animation: 'Бегущая строка' },
            { active: false, count: 20, animation: 'Бегущая строка' }
          ],
          active: false
        },
        {
          title: 'Самый крупный донатер',
          collapseItem: [
            { active: true, count: 20, animation: 'Бегущая строка' },
            { active: false, count: 20, animation: 'Бегущая строка' },
            { active: false, count: 20, animation: 'Бегущая строка' }
          ],
          active: false
        },
        {
          title: 'Последний донатер',
          collapseItem: [
            { active: true, count: 20, animation: 'Бегущая строка' },
            { active: false, count: 20, animation: 'Бегущая строка' },
            { active: true, count: 20, animation: 'Бегущая строка' }
          ],
          active: false
        },
        {
          title: 'Последний подписчик',
          collapseItem: [
            { active: true, count: 20, animation: 'Бегущая строка' },
            { active: false, count: 20, animation: 'Бегущая строка' },
            { active: false, count: 20, animation: 'Бегущая строка' }
          ],
          active: false
        },
        {
          title: 'Количество подписчиков за период',
          collapseItem: [
            { active: true, count: 20, animation: 'Бегущая строка' },
            { active: false, count: 20, animation: 'Бегущая строка' },
            { active: false, count: 20, animation: 'Бегущая строка' }
          ],
          active: false
        }
      ]
    }
  },
  edit () {
    return {
      method: 'GET',
      url: 'widgets/1',
      response: {
        widget_type: { value: 'Последнее сообщение', message: 'Последнее сообщение: {{message}}' },
        widget_list_count: 20,
        widget_subscribe: 'Любая',
        widget_animation: { value: 'Стандартно', class_name: 'static' },
        widget_animation_delay: 1000,
        widget_color: '#903030',
        widget_font_size: 16,
        widget_amount: 900,
        widget_max_amount: 1500,
        sbor_width: 400,
        sbor_height: 30,
        sbor_text_inside: '#FFFFFF',
        sbor_text_outside: '#FFFFFF',
        sbor_bar_color: '#525286',
        sbor_bar_fill_color: '#6C55D9',
        sbor_border: false,
        sbor_bar_border_color: '#FFFFFF'
      }
    }
  }
}

export default widgets
