export const SystemColors = {
  Blue: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
  Green: (opacity = 1) => `rgba(52, 199, 89, ${opacity})`,
  Indigo: (opacity = 1) => `rgba(88, 86, 214, ${opacity})`,
  Orange: (opacity = 1) => `rgba(255, 149, 0, ${opacity})`,
  Pink: (opacity = 1) => `rgba(255, 45, 85, ${opacity})`,
  Purple: (opacity = 1) => `rgba(191, 82, 222, ${opacity})`,
  Red: (opacity = 1) => `rgba(255, 69, 58, ${opacity})`,
  Teal: (opacity = 1) => `rgba(90, 200, 250, ${opacity})`,
  Yellow: (opacity = 1) => `rgba(255, 204, 0, ${opacity})`,
  Gray: (number = 1, opacity = 1) => {
    switch (number) {
      case 1:
        return `rgba(142, 142, 147, ${opacity})`
      case 2:
        return `rgba(99, 99, 102, ${opacity})`
      case 3:
        return `rgba(72, 72, 74, ${opacity})`
      case 4:
        return `rgba(58, 58, 60, ${opacity})`
      case 5:
        return `rgba(44, 44, 46, ${opacity})`
      case 6:
        return `rgba(28, 28, 30, ${opacity})`
      default:
        return `rgba(142, 142, 147, ${opacity})`
    }
  },
}

export const getColor = (color, opacity = 1) =>
  SystemColors[color] ? SystemColors[color](opacity) : SystemColors.Blue(1)
