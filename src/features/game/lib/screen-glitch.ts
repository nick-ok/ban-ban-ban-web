import * as PIXI from 'pixi.js';

export interface GlitchOptions {
  duration: number;
}

export class ScreenGlitch {
  private targetContainer: PIXI.Container;
  private colorFilter: PIXI.ColorMatrixFilter;
  private displacementFilter: PIXI.DisplacementFilter;
  private displacementSprite: PIXI.Sprite;
  private timeRemaining = 0;

  constructor(targetContainer: PIXI.Container) {
    this.targetContainer = targetContainer;

    // 1. Фильтр цвета
    this.colorFilter = new PIXI.ColorMatrixFilter();

    // 2. Фильтр искажения геометрии
    this.displacementSprite = this.createNoiseSprite();
    this.displacementFilter = new PIXI.DisplacementFilter({
      sprite: this.displacementSprite,
    });

    // Изначально выключаем искажение (прямым присвоением x и y)
    this.displacementFilter.scale.x = 0;
    this.displacementFilter.scale.y = 0;

    // Добавляем спрайт шума на сцену, чтобы фильтр мог считывать его координаты
    this.targetContainer.addChild(this.displacementSprite);

    // 3. Безопасное добавление фильтров в PixiJS v8
    const currentFilters = this.targetContainer.filters
      ? [...this.targetContainer.filters]
      : [];

    currentFilters.push(this.colorFilter, this.displacementFilter);
    this.targetContainer.filters = currentFilters;
  }

  public start({ duration }: GlitchOptions): void {
    this.timeRemaining = duration;
  }

  public update(deltaMS: number): void {
    if (this.timeRemaining <= 0) {
      this.colorFilter.reset();
      this.displacementFilter.scale.x = 0;
      this.displacementFilter.scale.y = 0;
      return;
    }

    this.timeRemaining -= deltaMS;

    // Хаотично дергаем цвета
    if (Math.random() < 0.4) {
      const presets = [
        () => this.colorFilter.kodachrome(true),
        () => this.colorFilter.technicolor(true),
        () => this.colorFilter.negative(true),
      ];
      presets[Math.floor(Math.random() * presets.length)]();
    }

    // Меняем значения scale.x и scale.y
    if (Math.random() < 0.3) {
      this.displacementFilter.scale.x = (Math.random() - 0.5) * 120; // Разрыв по горизонтали
      this.displacementFilter.scale.y = (Math.random() - 0.5) * 30; // Разрыв по вертикали

      // Смещаем текстуру шума для случайности узора
      this.displacementSprite.x = Math.random() * 500;
      this.displacementSprite.y = Math.random() * 500;
    } else {
      // Быстрое затухание глитча
      this.displacementFilter.scale.x *= 0.5;
      this.displacementFilter.scale.y *= 0.5;
    }
  }

  private createNoiseSprite(): PIXI.Sprite {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    for (let y = 0; y < 128; y += 4) {
      const brightness = Math.floor(Math.random() * 255);
      ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
      ctx.fillRect(0, y, 128, Math.random() * 8);
    }

    const texture = PIXI.Texture.from(canvas);
    texture.source.addressMode = 'repeat';

    const sprite = new PIXI.Sprite(texture);
    sprite.visible = false;
    return sprite;
  }
}
